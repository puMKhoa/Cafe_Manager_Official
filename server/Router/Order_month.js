const express = require('express')
var router = express.Router();
const con = require('../connection');

router.get('/Total_salary_value/' , (req , res)=>{
    try {
        const value_month = req.body.month;
        let sql = "select Total_Employees_Salary(?) as Total_Salary_of_employee";
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

router.get('/Total_Price_Order/' , (req , res)=>{
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
router.get('/Total_Profit/' , (req , res)=>{
    try {
        const value_month ={
            value_of_price: req.body.value_of_price,
            value_of_employee: req.body.value_of_employee,
        }
        let sql = "select Total_Profit(?,?) as Total_Profit";
        console.log(value_month);
        con.query(sql , [value_month.value_of_price , value_month.value_of_employee], (err , results)=>{
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