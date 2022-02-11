const express = require('express');
const app = express();

app.set('views','./views');
app.set('view engine','ejs')

app.use('/public',express.static('public'));

app.get('/',function(req,res){
    res.render('index')

})
app.get('/contact',function(req,res){
    res.render('contact')
})
app.get('/Rejoindre',function(req,res){
    res.render('Rejoindre')
})

app.listen(8080,
    ()=> console.log("server on port 8080")
)
