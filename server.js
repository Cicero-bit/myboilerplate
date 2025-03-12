const express = require('express')
const app = express();
const routes = require('./routes');
const path = require('path')
const port = 3000

app.use(express.urlencoded({extended: true}));
app.use(routes);

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');


app.listen(port, (e) => [
    console.log(`server starting at port ${port} http://localhost:${port}`)
]);