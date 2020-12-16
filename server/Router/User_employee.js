const express = require('express')
var router = express.Router();
const con = require('../connection');

router.get('/User_employee/' , (req, res)=>{
    var sql = "SELECT * FROM businessmanagementdb.employees";
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
                    res.send({message:"them khong thanh cong"})
                }
                else{
                    res.send({message:"them thong tin thanh cong"})
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
                res.send({message:"da xoa thanh cong nhan vien"});
            }
        })
        
    } catch (error) {
        res.send({message:"khong tim thay id hoac id da duoc xoa"})
    }
})
router.post('/User_employee/Update' , (req, res)=>{
    try {
        const UPdate_Employee = {
            row_update: req.body.row,
            UP_Employee: req.body.row_value,
            UP_id: req.body.id
        }
        var sql = "update `Employees` set "+"`" + UPdate_Employee.row_update + "`"+ "=? where id=?";
        con.query(sql , [UPdate_Employee.UP_Employee,UPdate_Employee.UP_id], (err, results)=>{
            if (err) res.send({message : "cap nhat khong thanh cong"});
            else
            {
                res.send({message:"cap nhat thanh cong nhan vien"})
            }
        })
    } catch (error) {
        res.send({message:"khong tim thay yeu cau"})
    }
})

module.exports =router;