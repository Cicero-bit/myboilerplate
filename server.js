const express = require('express')
const app = express();

app.use(express.urlencoded({extended: true}));

app.get('/', (req , res) => {
    res.send("olá usuario")
});


app.get('/testes/:userid?', (req, res) => {
    console.log(req.params.userid);
    res.send('hi');
})

app.listen(5959, (e) => [
    console.log('server starting at port 5959')
]);