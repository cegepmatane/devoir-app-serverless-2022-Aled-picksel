class Application {
  constructor(window, vueListePokemon, vuePokemon, vueAjouterPokemon, pokemonDAO){

    this.window = window;

    this.vueListePokemon = vueListePokemon;

    this.vuePokemon = vuePokemon;

    this.vueAjouterPokemon = vueAjouterPokemon;
    // C'est l'équivalent de function(cokemon){this.ajouterCokemon(cokemon)}
    this.vueAjouterPokemon.initialiserAjouterPokemon(pokemon =>this.ajouterPokemon(pokemon));

    this.pokemonDAO = pokemonDAO;

    // C'est l'équivalent de function(){this.naviguer()}
    this.window.addEventListener("hashchange", () =>this.naviguer());

    this.naviguer();
  }

  naviguer(){
    let hash = window.location.hash;

    if(!hash){

      this.pokemonDAO.lister((listePokemon) => this.afficherNouvelleListePokemon(listePokemon));

    }else if(hash.match(/^#ajouter-pokemon/)){

      this.vueAjouterPokemon.afficher();

    }else{

      let navigation = hash.match(/^#pokemon\/([0-9]+)/);
      let idPokemon = navigation[1];

      this.pokemonDAO.chercher(idPokemon, (pokemon) => this.afficherNouveauPokemon(pokemon));
    }
  }

  afficherNouvelleListePokemon(listePokemon){

    console.log(listePokemon);
    this.vueListePokemon.initialiserListePokemon(listePokemon);
    this.vueListePokemon.afficher();
  }

  afficherNouveauPokemon(pokemon){
    console.log(pokemon);
    this.vuePokemon.initialiserPokemon(pokemon);
    this.vuePokemon.afficher();
  }

  ajouterPokemon(pokemon){
    this.pokemonDAO.ajouter(pokemon, () => this.afficherListePokemon());
  }

  afficherListePokemon(){
    this.window.location.hash = "#";
  }
}

new Application(window, new VueListePokemon(), new VuePokemon(), new VueAjouterPokemon(), new PokemonDAO());

