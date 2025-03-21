


exports.loginLoader = (req, res) => {
    res.render('login');
    console.log("usuario no login");
};

exports.register = (req, res) => {
    res.send(req.body);
    console.log("post para o register, login")
};