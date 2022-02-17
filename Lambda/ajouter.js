console.log('Loading function');

var AWS = require('aws-sdk');
const s3 = new AWS.S3({ apiVersion: '2006-03-01' });
const querystring = require('querystring');

exports.handler = async (event) => {
  const postdata = querystring.parse(event.body);
  
  let pokemon = null;
  let pokemonjson = postdata["pokemonjson"];
  if(pokemonjson){
    pokemon = JSON.parse(pokemonjson);
  }
  
  let response = {
    statusCode: 400,
    headers: {
      "Access-Control-Allow-Origin" : "*"
    },
    body : "Pas de pokemon reçu",
  };
  
  if (pokemon == null) {
    return response;
  }

  pokemon.id = Date.now();

  const params = {
      Bucket: "app-list-pokemon",
      Key: "liste-pokemon.json",
  };

  let data = await s3.getObject(params).promise();
  let listePokemonJson = data.Body.toString('utf-8');
  const listePokemon = JSON.parse(listePokemonJson);
  listePokemon.push(pokemon);
  listePokemonJson = JSON.stringify(listePokemon);
  params.Body  = listePokemonJson;
  data = await s3.putObject(params).promise();

  response = {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin" : "*"
      },
      body: pokemon.id
  };

  return response;
};