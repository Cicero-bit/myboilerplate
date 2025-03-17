exports.checkCsrfError = (err, req, res, next) => {
    console.log('oioi')
    if(err && err === 'EBADCSRFTOKEN'){
        return res.send('bad request')
    }
}

exports.csrfMiddleware = (err, req, res, next) => {
    res.local.csrfToken = req.csrfToken();
    next();
}