class VuePokemon{
  constructor(){
    this.html = document.getElementById("html-vue-pokemon").innerHTML;
    this.cokemon = null;
  }

  initialiserPokemon(pokemon){
    this.pokemon = pokemon;
  }

  afficher(){
    document.getElementsByTagName("body")[0].innerHTML = this.html;
    document.getElementById("pokemon-nom").innerHTML = this.pokemon.nom;
    document.getElementById("pokemon-type").innerHTML = this.pokemon.type;
    document.getElementById("pokemon-description").innerHTML = this.pokemon.description;
  }

}
