let express = require('express');
let mysql = require(mysql);
let connect = mysql.createConnection({
   host:'localhost' ,
   user: 'root',
   password:'',
   database:'projet_yoogo '
})
connection.connect(function(error){
    if(!!error){
       console.log('error');
    }
    else{
       console.log('connecté');
    }
})
app.get('/',function(req,res){
   connection.query("SELECT * FROM projet_yoogo", function(error,rows,fields){
      if(!!error){
         console.log('error in the query');
      }
      else{
         console.log(success);
      }
   });
})
app.listen(3000)