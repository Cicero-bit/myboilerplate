const LoginModel = require('../models/loginModel')


exports.loginLoader = (req, res) => {
    res.render('login');
    if(req.session.user){
        console.log(`usuario já logado ${req.session.user._id}`)
    }
};

exports.logout = (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.log('Erro ao destruir a sessão:', err);
            return res.status(500).send('Erro ao encerrar a sessão.');
        }
        res.redirect('/login');
    });
}

exports.login = async (req, res) => {
    try {
        const login = new LoginModel(req.body);
        await login.login();
        if(login.errors.length > 0){
            req.session.save(() => {
                res.send(login.errors);
                return;
            });
        } else{
            req.session.user = login.user;
            res.redirect('/');
            return;
        }
    } catch (error) {
        console.log(error)
    }
};



exports.register = async (req, res) => {
    try {
        const login = new LoginModel(req.body);
        await login.register();
        if(login.errors.length > 0){
            req.session.save(() => {
                res.send(login.errors);
            });
        return;
        } else{
            console.log(`usuario criado ${login.user}`);
            return;
        }
    } catch (error) {
        console.log(error)
    }
};