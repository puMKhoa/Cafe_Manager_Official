const express = require('express')
var router = express.Router();
const con = require('../connection');

router.get('/' , (req ,res)=>{
    try {
        let sql = 'select * from menu'
        con.query(sql , (err , results)=>{
            if(err) res.send({message: err.message})
            else
                res.send(results)
        })
    } catch (error) {
        res.send({message: err.message})
    }
})
router.post('/check_Item/' , (req , res)=>{
    try {
        const id_item = req.body.id;
        let sql = 'select * from menu where id=?';
        con.query(sql ,id_item ,(err, results)=>{
            if(err) res.send({message: err.message})
            else
                res.send(results)
        })
    } catch (error) {
        res.send({message: error.message})
    }
})

router.post('/Update_Menu/' , (req , res)=>{
    let Item_Update = {
        UP_item_id: req.body.id,
        UP_item_name: req.body.name,
        UP_item_Price: req.body.price,
        UP_item_UrlImg: req.body.urlImg,
    }
    try {
        let sql = "call update_menu(? ,? , ? , ?)"
        con.query(sql ,[Item_Update.UP_item_id , Item_Update.UP_item_name , Item_Update.UP_item_Price, Item_Update.UP_item_UrlImg] , (err , results)=>{
            if(err) res.send({message:err.message})
            else    
                res.send(results)
        })
    } catch (error) {
        res.send({message: err.message})
    }
})
router.post('/Delete_Menu/' , (req , res)=>{
    let Item_id = req.body.id;     
    try {
        let sql = "call delete_item_menu(?)"
        con.query(sql ,Item_id, (err, result)=>{
            if(err) res.send({message: err.message})
            else
                res.send({status: true});
        })
    } catch (error) {
        res.send({message: err.message})
    }
})
router.post('/Insert_Menu/' , (req , res)=>{
    try {
        let sql ="call Insert_value_menu(? , ? , ? );";
        let Item_IN_Update = {
            IN_item_name: req.body.name,
            In_item_Price: req.body.price,
            IN_item_UrlImg: req.body.urlImg,
        }
        con.query(sql ,[Item_IN_Update.IN_item_name , Item_IN_Update.In_item_Price, Item_IN_Update.IN_item_UrlImg] , 
            (err , results)=>{
            if(err) res.send({message:err.message})
            else    
                res.send(results)
        })
    } catch (error) {
        res.send({message:err.message})
    }
})
module.exports= router;