<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");

$pokemonJSON = file_get_contents('php://input');
$pokemon= json_decode( $pokemonJSON );
print_r($pokemon);

$listePokemon = [];
$listePokemonJson = file_get_contents("liste-pokemon.json");

if(strlen($listePokemonJson) > 0){
  $listePokemon = json_decode($listePokemonJson);
  $nombrePokemon = count($listePokemon);

  $pokemon->id = $nombrePokemon;
  array_push($listePokemon, $pokemon);
  print_r($listePokemon);
}

$listePokemonJson = json_encode($listePokemon);

/* Linux
sudo chgrp www-data liste-cokemon.json
sudo chmod g+w liste-cokemon.json
*/

file_put_contents("liste-pokemon.json", $listePokemonJson);
