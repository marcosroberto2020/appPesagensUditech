
var express = require('express');
var cors = require('cors');
var app = express();

app.use(cors());


app.use(express.static(__dirname));
const bodyParser = require('body-parser');

var port = 3000;
const router = express.Router();
// Carrega rotas
const primeira = require('./src/routes/primeira');

//index.js
//comentario sem node

//app.use('/', router);

app.use('/teste', primeira);


app.listen(port);
console.log('Umbler - Express server started on port %s', port);

