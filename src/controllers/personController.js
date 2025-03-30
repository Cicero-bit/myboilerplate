const PersonModel = require('../models/personModel')

exports.personRender = (req, res) => {
    res.render('person', {
        person: {
            person: {}  
        }
    });
}

exports.delete = async (req, res) => {
    try {
        const person = new PersonModel();
        const status = await person.delete(req.params.id);
        res.redirect('/');
    } catch (error) {
        console.log(error);
        res.redirect('404')
    }
}

exports.process = async (req, res) => {
    try {
        if(!req.params.id) return res.render('404');
        const user = new PersonModel(req.body);
        await user.edit(req.params.id);
        res.redirect('/');  
    } catch (error) {
        console.log(error);
        res.render('404')
    }

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