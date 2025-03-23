
//funcçoes com err no parametro são funcoes interpretadas como funções de tratamento de erros, caso o erro não ocorra, a função vai ser ignorada, não vai rodar
exports.checkCsrfError = (err, req, res, next) => {
    console.log('deu erro, global middleware')
    if(err){
        res.render(err)
        res.render('404');
    }
};

exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    res.locals.user = req.session.user;
    next();
};
