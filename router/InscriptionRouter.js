const express = require('express');
// const app = express();
const router = new express.Router();
const bodyParser = require('body-parser');


router.get('/', function(req,res){
    res.render('../views/Rejoindre')
})

router.use(bodyParser.urlencoded({ extended: false}));

router.post('/', function(req,res){
    console.log(req.body);
    
})

module.exports = router;

