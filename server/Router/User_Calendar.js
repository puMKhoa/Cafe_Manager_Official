const express = require('express')
var router = express.Router();
const con = require('../connection');

router.post('/' ,(req, res)=>{
    try{
        let sql = 'select * from calendars;';
        con.query(sql , (err , results)=>{
            if(err) res.send({message: "loi"})
            else
                res.send(results);
        })
    }
    catch(e){
        res.send({message: "khong the truy van du lie"})
    }
})
router.post('/total_salary_by_user/:id' , (req , res)=>{
    
    try {
        const id = req.params.id;
        let sql = 'select salarybyUser(?) as total_salary';
        con.query(sql , id , (err,results)=>{
            if(err) {
                res.send({message: err.message})
            }
            else{
                res.send(results[0])
            }
        })
    } catch (error) {
        
    }
})

module.exports =router;