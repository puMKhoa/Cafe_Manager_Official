const express = require('express')
var router = express.Router();
const con = require('../connection');
router.post('/take_value/' , (req , res)=>{
    const ID = req.body.id;
    // console.log(ID);
    try {
        let sql = " call render_calendar_with_id(?) ";
        con.query(sql , ID , (err , results)=>{
            if(err) 
                res.send({message: err.message})
            else{
                res.send(results[0])
            }
        })
    } catch (error) {
        res.send({message:eror.message})
    }
})
router.post('/update_value/' , (req , res)=>{
    let up_Canlendar = {
        update_id: req.body.id,
        update_mon: req.body.mon,
        update_tue: req.body.tue,
        update_wed: req.body.wed,
        update_thu: req.body.thu,
        update_fri: req.body.fri,
        update_sat: req.body.sat,
        update_sun: req.body.sun,
    }
    // console.log(up_Canlendar );
    try {
        let sql = "call update_calendar(?, ?, ?, ?, ?, ?, ?, ?);";
        con.query(sql , [up_Canlendar.update_id , 
            up_Canlendar.update_mon,
            up_Canlendar.update_tue,
            up_Canlendar.update_wed,
            up_Canlendar.update_thu 
            ,up_Canlendar.update_fri
            ,up_Canlendar.update_sat
            ,up_Canlendar.update_sun ] , (err , results)=>{
            if(err) 
                res.send({message: err.message})
            else{
                res.send({status: true})
            }
        })
    } catch (error) {
        res.send({message:eror.message})
    }
})
module.exports =router;