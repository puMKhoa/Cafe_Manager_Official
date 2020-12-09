const express = require('express');
const mysql = require('mysql')
const app = express();
const con = require('./connection')
const cors = require('cors');
const User_employee = require('./Router/User_employee')
const logger = require("morgan");

// middleware
const User = [];
app.use(
    cors({
      origin: 'http://localhost:3000',
      credentials: true,
    })
  );    
app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use('/data',User_employee);
// GET API
app.get('/login', function (req, res) {
    console.log("Inside Home Login");
    res.writeHead(200, {
        'Content-Type': 'application/json'
    });

})

app.post('/login' , (req , res )=>{
    try{
        const newUser = {
            UserName: req.body.user,
            PassWord: req.body.password
        }
        try{
            let sql = "select `id` from `Users` where `username` = ? and `password` = ?"
            con.query(sql,[newUser.UserName , newUser.PassWord], (err , data) =>{
               if(err) {
                    res.send({status: false , message: "khong co user"})
               }
               else{
                   try {
                        let results = JSON.parse(JSON.stringify(data));
                        if(results[0].id > 0){
                            console.log(results[0].id);
                            res.send({ status: true , message: "Dang nhap thanh cong"})
                        }
                        else{
                            res.send({status: false , message: "khong co user"})
                        }
                   } 
                   catch (error) {
                        console.log("khong co user");
                        res.send({status: false , message: "khong co user"})
                   }
               
            }
            })
        }
        catch(e){
            res.send({message: "not found"})
        }
    }
    catch(e){
        res.send({message: "not found"})
    }
    
})


// LISTENERS
app.listen( 9000 , ()=>[
    console.log('server is run at post 9000')
])
module.exports = con;