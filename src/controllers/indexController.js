const IndexModel = require('../models/IndexModel')
const PersonModel = require('../models/personModel')


exports.indexloader = async (req, res) => {
    const persons = new PersonModel();
    const list = await persons.list();
    res.render('index', {persons: list});
    console.log('alguem conectou');
};


