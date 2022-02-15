const express = require('express');
const router = new express.Router();


router.get('/', function(req,res){
    res.render('../views/index')
})

module.exports = router;

