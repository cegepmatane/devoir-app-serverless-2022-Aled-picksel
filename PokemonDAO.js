﻿class PokemonDAO{
  lister(action){
    fetch("https://ugipl1vkx6.execute-api.us-east-1.amazonaws.com/default/lister")
      .then(response => response.json())
      .then(data =>
        {
          console.log(data);
          let listePokemon = [];
          for(let position in data){
            let pokemon = new Pokemon(data[position].nom,
                                    data[position].type,
                                    data[position].description,
                                    data[position].id);

            console.log(pokemon);
            listePokemon.push(pokemon);
          }
          action(listePokemon);
        });
  }
  chercher(id, action){
    fetch("https://gscf4sqlj2.execute-api.us-east-1.amazonaws.com/default/chercher-par-id")
      .then(response => response.json())
      .then(data =>
        {
          console.log(data);
          let pokemon = new Pokemon(data.nom,
                                  data.type,
                                  data.description,
                                  data.id);
          action(pokemon);
        });
  }
  ajouter(pokemon, action){
    fetch("https://5emodqi0r8.execute-api.us-east-1.amazonaws.com/default/ajouter",
      {
        method: 'POST',
        headers: {
          'Content-Type':'application/x-www-form-urlencoded'
        },
        body: "pokemonjson=" + JSON.stringify(pokemon),
        mode:'cors',
      })
      .then(response => response.text())
      .then(data =>
        {
          console.log('Détail:', data);
          action();
        });
  }
}
