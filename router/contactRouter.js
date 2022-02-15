const express = require('express');
const router = new express.Router();


router.get('/', function(req,res){
    res.render('../views/contact')
})

module.exports = router;