const express= require('express')
const mysql = require('mysql')
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    database:'BusinessManagementDB',
    password: "thangprovn1"
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