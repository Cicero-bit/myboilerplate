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

exports.edit = async (req, res) => {
    try {
        if(!req.params.id) return res.render('404');
        const person = new PersonModel();
        await person.findbyid(req.params.id); 
        if(!person.person) return res.render('404');
        res.render('person', {
            person
        })
    } catch(e){
        res.render('404')
        console.log(e);
    }

}