//import do express
var express = require('express');
//criar um objeto do express.
var app = express();

//ponto de acesso : endpoint 
//request é uma requisição 
//response é a resposta do servidor
app.get('/', function (request, response) {
    response.send('Thiago Xavier');
});


//A porta que o node irá expor..
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

