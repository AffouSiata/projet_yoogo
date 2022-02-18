const connect = require("./connexion");


const userQuery= class{
    static inserer = (data)=>{
        let {email,genre,prenom,nom,ville,postal,dates} = data
      
        let requete = "INSERT INTO `users`(`email`, `genre`, `prenom`, `nom`, `postal`, `ville`, `dates`) VALUES (?,?,?,?,?,?,?)";
        connect.query(requete,[email,genre,prenom,nom,postal,ville,dates],function(error,res){
            if(error){
                return{erreur:error}
            }
            else{
                console.log('connecté');
                return{success:res}
        
        }
        })
    };


    static sel= (data)=>{
        console.log("zertyh",data);
        let {email,genre,prenom,nom,ville,postal,dates} = data
       
      
        let requete = `SELECT * FROM users WHERE email = '${data.email}' AND prenom = '${data.nom}'`;

        connect.query(requete,function(error,res){
            if(error){
                console.log("err user",error);
                return{erreur:error}
            }
            else{
                console.log('connecté avec success', res);
                 return{success:res}
        
        }
        })
    };





    static modifie= (data)=>{
        // console.log("zertyh",data);
        let {email,genre,prenom,nom,ville,postal,dates} = data
       
        let requete = `UPDATE users WHERE email = '${data.email}',genre ='${data.genre}',prenom ='${data.prenom}',nom='${data.nom}',postal='${data.postal}',ville='${data.ville}',dates='${data.dates}'`;

        connect.query(requete,function(error,res){
            if(error){
                console.log("err user",error);
                return{erreur:error}
            }
            else{
                console.log('connecté avec success', res);
                 return{success:res}
        
        }
        })
    };




}

// 


// const inserer = (data)=>{
//         let {email,genre,prenom,nom,ville,postal,dates} = data
      
//         let requete = "INSERT INTO `users`(`email`, `genre`, `prenom`, `nom`, `postal`, `ville`, `dates`) VALUES (?,?,?,?,?,?,?)";
//         connect.query(requete,[email,genre,prenom,nom,postal,ville,dates],function(error,res){
//             if(error){
//                 return{erreur:error}
//             }
//             else{
//                 console.log('connecté');
//                 return{success:res}
        
//         }
//         })
// };
module.exports = userQuery;