console.log('Loading function');

var AWS = require('aws-sdk');
const s3 = new AWS.S3({ apiVersion: '2006-03-01' });

exports.handler = async (event) => {
  const id = event.queryStringParameters && event.queryStringParameters.id;

  let response = {
    statusCode: 400,
    headers: {
      "Access-Control-Allow-Origin" : "*"
    }, 
    body: 'Vous devez donner un id de pokemon'
  };
  if (id == null) {
    return response;
  }

  const params = {
      Bucket: "app-list-pokemon",
      Key: "liste-pokemon.json",
  };

  const data = await s3.getObject(params).promise();
  console.log("Raw text:\n" + data.Body.toString('utf-8'));
  const listePokemonJson = data.Body.toString('utf-8');
  const listePokemon = JSON.parse(listePokemonJson);

  let pokemon = listePokemon.find(pokemon => pokemon.id == id);

  response = {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin" : "*"
      }, 
      body: JSON.stringify(pokemon).toString('utf-8')
  };
  
  return response;
};
