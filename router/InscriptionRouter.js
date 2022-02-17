const express = require('express');
// const app = express();
const router = new express.Router();
const bodyParser = require('body-parser');
const db = require('../connexion');
let azerty = bodyParser.urlencoded({ extended: false});

router.get('/', function(req,res){
    res.render('../views/Rejoindre')
})



router.post('/',azerty ,(req,res)=>{
    let {email,genre,prenom,nom,ville,postal,dates} = req.body
    console.log(req.body);


    let requete = "INSERT INTO `users`(`email`, `genre`, `prenom`, `nom`, `postal`, `ville`, `dates`) VALUES (?,?,?,?,?,?,?)";
    db.query(requete,[email,genre,prenom,nom,postal,ville,dates],function(error){
        if(error){
            console.log(error);
        }
        else{
            console.log('connecté');

    }
})
    
})


module.exports = router;

