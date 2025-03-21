const express = require('express')
const route = express.Router();
const indexcontroller = require('./src/controllers/indexController');
const logincontroller = require('./src/controllers/loginController');


route.get('/', indexcontroller.indexloader)

route.get('/login', logincontroller.loginLoader)
route.post('/login', logincontroller.register)

module.exports = route;