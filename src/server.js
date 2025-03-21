const express = require("express")
const cors = require("cors")
require("dotenv").config()
const app = express()
app.use(cors())
app.use(express.json())


app.listen(3030, "127.0.0.1", ()=>{
    console.log("server is running on http://127.0.0.1:3030")
})

require("./Database/connection")
app.get("/", (req, res)=>{
    res.send("home")
})
