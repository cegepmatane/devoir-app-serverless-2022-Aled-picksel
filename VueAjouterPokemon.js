class VueAjouterPokemon{
  constructor(){
    this.html = document.getElementById("html-vue-ajouter-pokemon").innerHTML;
    this.ajouterPokemon = null;
  }

  initialiserAjouterPokemon(ajouterPokemon){
    this.ajouterPokemon = ajouterPokemon;
  }

  afficher(){
    document.getElementsByTagName("body")[0].innerHTML = this.html;
    document.getElementById("formulaire-ajouter").addEventListener("submit",evenement =>this.enregistrer(evenement));
  }

  enregistrer(evenement){
    evenement.preventDefault();

    let nom = document.getElementById("pokemon-nom").value;
    let type = document.getElementById("pokemon-type").value;
    let description = document.getElementById("pokemon-description").value;

    this.ajouterPokemon(new Pokemon(nom, type, description, null));

  }

}