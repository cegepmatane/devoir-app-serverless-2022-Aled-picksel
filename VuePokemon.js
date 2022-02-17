class VuePokemon{
  constructor(){
    this.html = document.getElementById("html-vue-pokemon").innerHTML;
    this.pokemon = null;
  }

  initialiserPokemon(pokemon){
    this.pokemon = pokemon;
  }

  afficher(){
    document.getElementsByTagName("body")[0].innerHTML = this.html;
    document.getElementById("pokemon-nom").innerHTML = this.pokemon.nom;
    document.getElementById("pokemon-type").innerHTML = this.pokemon.type;
    document.getElementById("pokemon-pv").innerHTML = this.pokemon.pv;
    document.getElementById("pokemon-evolution").innerHTML = this.pokemon.evolution;
    document.getElementById("pokemon-attack").innerHTML = this.pokemon.attack;
    document.getElementById("pokemon-vitesse").innerHTML = this.pokemon.vitesse;
    document.getElementById("pokemon-description").innerHTML = this.pokemon.description;
  }

}
