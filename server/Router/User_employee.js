const express = require('express')
var router = express.Router();
const con = require('../connection');

router.get('/User_employee' , (req, res)=>{
    var sql = "SELECT * FROM `CAFE_CUSTOMERS` where `FIRST_NAME` ='Paula' ";
    con.query(sql, (err ,  results)=>{
        if (err) throw err;
        res.send(results);
    })
})
router.get('/User_employee' , (req, res)=>{
    var sql = "SELECT * FROM `CAFE_CUSTOMERS` where `FIRST_NAME` ='Paula' ";
    con.query(sql, (err ,  results)=>{
        if (err) throw err;
        res.send(results);
    })
})
router.get('/User_employee' , (req, res)=>{
    var sql = "SELECT * FROM `CAFE_CUSTOMERS` where `FIRST_NAME` ='Paula' ";
    con.query(sql, (err ,  results)=>{
        if (err) throw err;
        res.send(results);
    })
})


module.exports =router;