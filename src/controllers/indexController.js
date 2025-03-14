const IndexModel = require('../models/IndexModel')


exports.indexloader = (req , res) => {
    res.render('index');
    console.log('alguem conectou');
};


