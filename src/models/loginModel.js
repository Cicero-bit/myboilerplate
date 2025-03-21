const mongoose = require('mongoose');

const LoginSchema = new mongoose.Schema({
    email: {type: String, required: true},
    senha: {type: String, required: true}
});

const LoginModel = mongoose.model('Index', LoginSchema);

module.exports = LoginModel;