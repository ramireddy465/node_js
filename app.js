const express= require('express')
const app = express()
var cors = require('cors')

const productRoter = require('./routes/products')
app.use(cors())
app.use('/',productRoter)
app.listen(3000,()=>{

    console.log("app started")

})