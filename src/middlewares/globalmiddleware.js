module.exports = (req, res, next) => {
    console.log('global middleware');
    next();
}