const express = require('express');
// const app = express();
const router = new express.Router();
const bodyParser = require('body-parser');
const userQuery = require('../requete');
let azerty = bodyParser.urlencoded({ extended: false});



router.get('/', azerty,function(req,res){
    res.render('../views/pageconn')
    let ddd = userQuery.sel(req.body)
    console.log(ddd);
})

router.post('/',azerty ,(req,res)=>{
let ddd=userQuery.sel(req.body)
    console.log(ddd);

})










module.exports = router;

