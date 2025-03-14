const express = require('express')
const route = express.Router();
const indexcontroller = require('./src/controllers/indexController');


function meuMiddleWare(res, req, next){
    console.log("eu estou antes de carregar a pagina");
    next();
}

route.get('/', meuMiddleWare, indexcontroller.indexloader)

module.exports = route;