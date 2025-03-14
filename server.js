require('dotenv').config();


const express = require('express')
const app = express();
const routes = require('./routes');
const path = require('path')
const mongoose = require('mongoose');
const connectionString = process.env.connectionString;

mongoose.connect(connectionString)
    .then(()=> {
        console.log('data base connect')
        app.emit('connect');
    })
    .catch(e => console.log(e));

const port = 3000

app.use(express.urlencoded({extended: true}));

app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');



//nossos middlewares, interceptadores de dados
app.use(require('./src/middlewares/globalmiddleware.js'))
app.use(routes);


app.on('connect', () => {
    app.listen(port, (e) => {
        console.log(`Server started at http://localhost:${port}`);
    });
});

