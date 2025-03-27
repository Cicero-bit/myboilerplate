const mongoose = require('mongoose');
const validator = require('validator');

const PersonSchema = new mongoose.Schema({
    name: {type: String, required: false, default: 'nome'},
    email: {type: String, required: true},
    password: {type: String, required: true},
    cpf: {type: String, required: true},
    phone: {type: String, required: true},
    birthdate: {type: String, required: true},
    createdDate: {type: Date, default: Date.now},
    admin: {type: Boolean, default: false},
    sex: {type: String}
});

const PersonModel = mongoose.model('Person', PersonSchema);

class Person{
    constructor(body){
        this.body = body;
        this.erros = [];
        this.person = null;
    }

    async bdCreate(){
        this.cleanUp();
        this.person = await PersonModel.create(this.body);
    }

    cleanUp(){
        for(let key in this.body){
            if(typeof this.body[key] !== 'string'){
                this.body[key] = '';
            }
        }
        
        this.body = {
            name: 'skibidi name',
            password: this.body.password,
            email: this.body.email,
            cpf: this.body.cpf,
            phone: this.body.phone,
            birthdate: this.body.birthdate,
            sex: this.body.sex,
            admin: this.body.admin === 'on'
        }
    }

}

module.exports = Person;