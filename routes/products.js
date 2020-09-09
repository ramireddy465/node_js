const express = require('express')
const fs = require('fs')
const router = express.Router()


router.get('/products',(req,res)=>{
    fs.readFile('./sampleData.json', 'utf-8', (err,data)=>{
        
        if(!err){
            res.send(data)
        }
       
    })
    
})


module.exports = router
