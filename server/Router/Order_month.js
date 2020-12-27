const express = require('express')
var router = express.Router();
const con = require('../connection');
var arr = [];
let test = 0;

router.post('/Total_salary_value/' , (req , res)=>{
    try {
        let sql = "select Total_salary_per_month() as total";
            con.query(
                sql,
                (err , results) => {
                    if(err) res.send({message:err.message});
                    else res.send(results);
                }
            )
     } 
    catch (error) {
        res.send({error: error.message})
    }
})
router.post('/Total_Price_Order/' , (req , res)=>{
    try {
        const value_month = req.body.month;
        let sql = "select Total_Price_Order(?) as Total_Price_order";
        console.log(value_month);
        con.query(sql , value_month, (err , results)=>{
            if(err) res.send({message: err.message})
            else
                res.send(results)
        })
    } 
    catch (error) {
        res.send({error: error.message})
    }
})


module.exports = router