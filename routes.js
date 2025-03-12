const express = require('express')
const route = express.Router();
const indexcontroller = require('./src/controllers/indexController');

route.get('/', indexcontroller.indexloader)

module.exports = route;