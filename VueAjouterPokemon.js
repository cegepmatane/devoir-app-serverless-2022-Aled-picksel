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

    console.log(document.getElementById("pokemon-evolution"));
    
    let nom = document.getElementById("pokemon-nom").value;
    let type = document.getElementById("pokemon-type").value;
    let pv = document.getElementById("pokemon-pv").value;
    let evolution = document.getElementById("pokemon-evolution").value;
    let attack = document.getElementById("pokemon-attack").value;
    let vitesse = document.getElementById("pokemon-vitesse").value;
    let description = document.getElementById("pokemon-description").value;

    console.log(document.getElementById("pokemon-evolution"));

    this.ajouterPokemon(new Pokemon(nom, type, pv, evolution, attack, vitesse, description, null));

  }

}
