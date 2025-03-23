const mongoose = require('mongoose');
const validator = require('validator');
const bcryptjs = require('bcryptjs');

const LoginSchema = new mongoose.Schema({
    email: {type: String, required: true},
    password: {type: String, required: true}
});

const LoginModel = mongoose.model('Login', LoginSchema);

class Login{
    constructor(body){
        this.body = body;
        this.errors = [];
        this.user = null;
    }


    async login(){
        this.valida();
        this.user = await LoginModel.findOne({email: this.body.email});
        if(!this.user){
            this.errors.push('Email e/ou senha incorretos');
            return;
        }
        if(!bcryptjs.compareSync(this.body.password, this.user.password)){
            this.errors.push('Senha e/ou email incorretos');
            return;
        };
    }

    async register(){
        this.valida();
        await this.allreadyRegistered();
        if(this.errors.length > 0) return;
            const salt = bcryptjs.genSaltSync();
            this.body.password = bcryptjs.hashSync(this.body.password, salt);
            this.user = await LoginModel.create(this.body); 

    }

    async allreadyRegistered(){
        const user = await LoginModel.findOne({email: this.body.email});
        console.log( user)
        if(user){
            this.errors.push('email allreay been used')
        }
    }

    valida(){
        this.cleanUp();

        if(!validator.isEmail(this.body.email)) this.errors.push("invalid mail");
        if(this.body.password.length < 4 || this.body.password.length > 12) this.errors.push("password must be between 3-12 chars");
    }

    cleanUp(){
        for(let key in this.body){
            if(typeof this.body[key] !== 'string'){
                this.body[key] = '';
            };
        }

        this.body = {
            email: this.body.email,
            password: this.body.password
        }
    }
}

module.exports = Login;