const PersonModel = require('../models/personModel')

exports.personRender = (req, res) => {
    res.render('person');
}

exports.create = (req, res) => {
    const person = new PersonModel(req.body);
    person.bdCreate;
    console.log(person.person);
    res.redirect('/')
}