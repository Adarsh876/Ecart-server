require('dotenv').config()

const express = require('express')

const cors = require('cors')

require('./DB/connection')

const routes = require('./Routes/router')

const cartServer = express()

cartServer.use(cors())

cartServer.use(express.json())

cartServer.use(routes)

const PORT = 3000 || process.env.PORT

cartServer.listen(PORT,()=>{
    console.log(`server running successfully on port number ${PORT}`);
})

cartServer.get("/",(req,res)=>{
    res.send(`<h1>Server running successfully</h1>`)
})