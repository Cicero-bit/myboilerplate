const express = require('express')
const route = express.Router();
const indexcontroller = require('./src/controllers/indexController');
const logincontroller = require('./src/controllers/loginController');


route.get('/', indexcontroller.indexloader);

route.get('/login', logincontroller.loginLoader);
route.post('/login/register', logincontroller.register);
route.post('/login/login', logincontroller.login);
route.get('/logout', logincontroller.logout);



module.exports = route; 