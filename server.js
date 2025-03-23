//configuracao do dotenv para as variaveis de ambiente
require('dotenv').config();
const port = 3000

//segurança do servidor contra atraque externos
const helmet = require('helmet');
const csrf = require('csurf');


//configuracoes do express e seus rotas
const express = require('express')
const app = express();
const routes = require('./routes');
const path = require('path')
const mongoose = require('mongoose');
const connectionString = process.env.connectionString;


//configuracoes de sessao do usuario
const session = require('express-session');
const MongoStore = require('connect-mongo');
const flashmsg = require('connect-flash');

const sessionOptions = session({
    secret: process.env.sessionSecret,
    store: MongoStore.create({ mongoUrl: connectionString }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    }
});

app.use(sessionOptions);
app.use(flashmsg());
app.use(helmet());


mongoose.connect(connectionString)
.then(()=> {
    console.log('data base connect')
    app.emit('connect');
})
.catch(e => console.log(e));


//views
app.set('views', path.resolve(__dirname, 'src', 'views'));
//engine para rodar as views
app.set('view engine', 'ejs');


// configuracoes do express
//aplicacao aceita postar formularios para ela mesma
app.use(express.urlencoded({extended: true}));
app.use(express.json());
//static files 
app.use(express.static(path.resolve(__dirname, 'public')));

//nossos middlewares, interceptadores de dados e routes
app.use(csrf());
const {checkCsrfError,  csrfMiddleware} = require('./src/middlewares/globalmiddleware.js')
app.use(checkCsrfError) //global middleware, passa por todas as rotas
app.use(csrfMiddleware) // global middleware para gerar um crsf token para protecao contra injecao externa
app.use(routes);

app.on('connect', () => {   
    app.listen(port, (e) => {
        console.log(`Server started at http://localhost:${port}`);
    });
});





