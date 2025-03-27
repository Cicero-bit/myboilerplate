const PersonModel = require('../models/personModel')

exports.personRender = (req, res) => {
    res.render('person');
}

exports.create = async (req, res) => {
    try{
        const person = new PersonModel(req.body);
        await person.bdCreate();
        console.log(person);
        res.redirect('/')
    } catch(e) {
        console.log(e);
    }
    
}