const express = require('express');

const app = express();

app.listen(3000);



app.set('view engine','ejs');

app.use(express.static('public'));





app.get('/',(req,res) =>{
    res.render('index');
})

app.get('/services',(req,res) =>{
    res.render('services');
})

app.get('/404',(req,res) =>{
    res.render('404');
})