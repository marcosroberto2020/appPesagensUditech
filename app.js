
var express = require('express');
var app = express();

const banco = require('./db');

app.use(express.static(__dirname));
const bodyParser = require('body-parser');

var port = 3000;
const router = express.Router();
// Carrega rotas
const primeira = require('./src/routes/primeira');

//index.js


//app.use('/', router);
app.use('/teste', primeira);
banco.connect();

app.listen(port);
console.log('Umbler - Express server started on port %s', port);

