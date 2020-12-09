const express= require('express')
const mysql = require('mysql')
var con = mysql.createConnection({
    host: "localhost",
    user: "khoaf",
    database:'BusinessManagementDB',
    password: "Passworldla1"
  });
  
  con.connect((err)=>{
    if(err){
        console.log('cannot connect');
    }
    else{
        console.log('connected');
    }
})
module.exports = con;