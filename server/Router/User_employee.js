const express = require('express')
var router = express.Router();
const con = require('../connection');

router.get('/User_employee' , (req, res)=>{
    var sql = "SELECT * FROM `businessmanagementdb`.`employees`";
    con.query(sql, (err ,  results)=>{
        if (err) throw err;
        res.send(results);
    })
})

router.post('/User_employee/insert' , (req, res)=>{
    try{
        const Insert_employees = {
            IN_first_name: req.body.first_name,
            IN_last_name: req.body.last_name,
            IN_address: req.body.address,
            IN_birth_date: req.body.birth_date,
            IN_roles: req.body.role,
            IN_salary_day: req.body.salary_day
        }
        try{
            var sql = "Call IN_Employee(?,?,?,?,?,?)";
            con.query(sql,[Insert_employees.IN_first_name , Insert_employees.IN_last_name, Insert_employees.IN_address,Insert_employees.IN_birth_date,Insert_employees.IN_roles,Insert_employees.IN_salary_day], 
                (err ,  results)=>{
                if (err){
                    res.send(err.message)
                }
                else{
                    res.send({message: results})
                }
            })
        }catch(e){
            res.send({message:"them ham khong thanh cong"})
        }
    }
    catch(e){
        res.send({message: "khong tim thay nhan vien"})
    }
})
router.post('/User_employee/Delete' , (req, res)=>{
    try {
        const ID_employee = req.body.id;
        var sql = "call DE_Employees (?)" 
        con.query(sql, ID_employee, (err ,  results)=>{
            if (err) res.send({message:"xoa khong thanh cong"});
            // res.send(results);
            else{
                res.send({message: results})
            }
        })
        
    } catch (error) {
        res.send({message:"khong tim thay id hoac id da duoc xoa"})
    }
})
router.post('/User_employee/Render_Employee' , (req , res)=>{
    const ID = req.body.id;
    console.log(ID);
    try {
        let sql = " call render_employee(?);";
        con.query(sql , ID , (err , results)=>{
            if(err) 
                res.send({message: "khong tim thay employee"})
            else
                res.send(results[0])
        })
    } catch (error) {
        res.send({message:eror.message})
    }
})
router.post('/User_employee/Update' , (req, res)=>{
    try {
        const UPdate_Employee = {
            UP_id: req.body.id,
            UP_first_name: req.body.first_name,
            UP_last_name: req.body.last_name,
            UP_address: req.body.address,
            UP_birth_date: req.body.birth_date,
            UP_roles: req.body.role,
            UP_salary_day: req.body.salary_day
        }
        var sql = "call UP_value(?,?,?,?,?,?,?)";
        con.query(sql , [UPdate_Employee.UP_id , UPdate_Employee.UP_first_name,UPdate_Employee.UP_last_name ,UPdate_Employee.UP_address,UPdate_Employee.UP_birth_date,UPdate_Employee.UP_roles,UPdate_Employee.UP_salary_day], (err, results)=>{
            if (err) res.send(err);
            else
            {
                res.send({message: results});
            }
        })
    } catch (error) {
        res.send({message:"khong tim thay yeu cau"})
    }
})

module.exports =router;