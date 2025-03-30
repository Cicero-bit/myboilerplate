const express = require('express')
const route = express.Router();
const indexcontroller = require('./src/controllers/indexController');
const logincontroller = require('./src/controllers/loginController');
const personController = require('./src/controllers/personController');

//index
route.get('/', indexcontroller.indexloader);
//login
route.get('/login', logincontroller.loginLoader);
route.post('/login/register', logincontroller.register);
route.post('/login/login', logincontroller.login);
route.get('/logout', logincontroller.logout);

//person
route.get('/person', personController.personRender);
route.post('/person/create', personController.create);
route.get('/person/edit/:id', personController.edit);
route.post('/person/process/:id', personController.process)
route.get('/person/delete/:id', personController.delete)



module.exports = route;