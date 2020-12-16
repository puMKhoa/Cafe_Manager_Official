const express = require('express')
var router = express.Router();
const con = require('../connection');

router.get('/' ,(req, res)=>{
    try{
        let sql = 'select item_price as price from menu where id=12';
        con.query(sql , (err , results)=>{
            if(err) res.send({message: "loi"})
            else
                res.send(results[0]);
                console.log(results[0].price);
        })
    }
    catch(e){
        res.send({message: "khong the truy van du lie"})
    }
})
router.post('/Price_of_each_order/',(req , res)=>{
    try {
        let list_order = req.body.list_order;
 
        var sum = 0;
        console.log(list_order);
        for(let i = 0; i <list_order.length;i++ ){
            let temp = 0;
            let sql = "select item_price from menu where id=?"
                con.query(sql , list_order[i] , (err , results)=>{
                    if(err) res.send({message: err.message})
                    else{
                        temp = results[0].item_price;
                        sum += temp;
                    }
                    if(i === list_order.length-1){
                        res.send({results: sum})
                    }
                })
        }
    } 
    catch (error) {
        res.send({message: error.message})
    }
})
router.post('/oder_per_month', (req, res) =>{
    const list_order_items = req.body.list_order_items
})

module.exports = router;