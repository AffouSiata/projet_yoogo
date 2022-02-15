const express = require('express');
const app = express();
const acc= require("./router/indexRouter")
const routerRejoindre= require("./router/InscriptionRouter")
const routerContact= require("./router/contactRouter")

// let con =require('./connexion')

app.set('views','./views');
app.set('view engine','ejs')

app.use('/public',express.static('public'));


// app.get('/',function(req,res){
//     res.render('index')

// })
// app.get('/contact',function(req,res){
//     res.render('contact')
// })
// app.get('/Rejoindre',function(req,res){
//     res.render('Rejoindre')
// })




// app.use('/inscription',acc);
app.use('/Rejoindre',routerRejoindre);
app.use('/contact',routerContact);
app.use('/',acc);


app.listen(3000,
    ()=> console.log("server on port 3000")
)
