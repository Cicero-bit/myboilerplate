const mongoose = require('mongoose');
const validator = require('validator');
const bcryptjs = require('bcryptjs');

const PersonSchema = new mongoose.Schema({
    email: {type: String, required: true},
    password: {type: String, required: true}
});

const PersonModel = mongoose.model('Person', PersonModel);


module.exports = PersonModel;