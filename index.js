const express = require('express');
const app = express();

const acc= require("./router/indexRouter")
const routerRejoindre= require("./router/InscriptionRouter")
const routerContact= require("./router/contactRouter")
const routerConnexion= require("./router/conn")
const routerUpdate= require("./router/update")
const db = require('../projet_yoogo/connexion');
// const e = require('express'); 



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


db.connect(function(error){
    if(error){
       console.log( "echec de connexion", error);
    }
    else{
       console.log('connecté');
       app.use('/Rejoindre',routerRejoindre);
        app.use('/contact',routerContact);
        app.use('/pageconn',routerConnexion);
        app.use('/Rejoindre',routerUpdate);
        app.use('/',acc);

    }
})




// app.use('/inscription',acc);


app.listen(3000,
    ()=> console.log("server on port 3000")
)
