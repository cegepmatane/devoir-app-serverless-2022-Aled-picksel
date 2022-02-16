class VueListePokemon{
  constructor(){
    this.html = document.getElementById("html-vue-liste-pokemon").innerHTML;
    this.listePokemonDonnee = null;
  }

  initialiserListePokemon(listePokemonDonnee){
    this.listePokemonDonnee = listePokemonDonnee;
  }

  afficher(){
    document.getElementsByTagName("body")[0].innerHTML = this.html;

    let listePokemon = document.getElementById("liste-pokemon");
    const listePokemonItemHTML = listePokemon.innerHTML;
    let listePokemonHTMLRemplacement = "";

    for(var numeroPokemon in this.listePokemonDonnee){
      let listePokemonItemHTMLRemplacement = listePokemonItemHTML;
      listePokemonItemHTMLRemplacement = listePokemonItemHTMLRemplacement.replace("{Pokemon.id}",this.listePokemonDonnee[numeroPokemon].id);
      listePokemonItemHTMLRemplacement = listePokemonItemHTMLRemplacement.replace("{Pokemon.nom}",this.listePokemonDonnee[numeroPokemon].nom);
      listePokemonHTMLRemplacement += listePokemonItemHTMLRemplacement;
    }

    listePokemon.innerHTML = listePokemonHTMLRemplacement;
  }

}
