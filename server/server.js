const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const PORT = 5000
const userRoute = require('./routes/User')


app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use('/',userRoute)


app.listen(PORT,()=> {
    console.log('running')
})