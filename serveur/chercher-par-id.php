<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");
header('Content-Type: application/json; charset=utf-8');

$id = $_GET["id"];
$listePokemonJson = file_get_contents("liste-pokemon.json");

if(strlen($listePokemonJson) > 0){
  $listePokemon = json_decode($listePokemonJson);
  foreach($listePokemon as $pokemon) {
      if ($id == $pokemon->id) {
          echo json_encode($pokemon);
          die();
      }
  }
}
echo json_encode([]);

