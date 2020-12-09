const express = require('express');
var router = express.Router();
const con = require('../connection');

router.post('/Calendar/salary_/:id', (req , res)=>{
    try {
        const id_user = req.body.id;
        var sql = "select salarybyUser(?)";
        try {
            con.query(sql , id_user , (err , results) =>{
                if(err) res.send({message: "loi khi truy van id"})
                else 
                    res.send(results);
            })
        } catch (error) {
            res.send({message:  "loi khi truy van id"})
        }
    } catch (error) {
        res.send({message:  "loi khi truy van id"})
    }
})
