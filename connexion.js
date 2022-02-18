
let mysql = require('mysql');
let connect = mysql.createConnection({
   host:'192.168.64.2',
   user: 'pars',
   password:'11111',
   database:'projet_yoogo'
})
module.exports=connect;
