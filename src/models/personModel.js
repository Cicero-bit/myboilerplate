const mongoose = require('mongoose');
const validator = require('validator');
const bcryptjs = require('bcryptjs');

const PersonModel = new mongoose.Schema({
    email: {type: String, required: true},
    password: {type: String, required: true}
});

const LoginModel = mongoose.model('Login', LoginSchema);
