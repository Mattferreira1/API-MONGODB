const express = require("express")
const cors = require("cors")
require("dotenv").config()
const app = express()
app.use(cors())
app.use(express.json())
require("./Models/BookModel")
const BookController = require("./Controllers/BookController")
const bookController = new BookController()
const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => console.log(`Servidor rodando na porta ${PORT}`));


require("./Database/connection")
app.get("/", (req, res)=>{
    res.send("home")
})
app.get("/v1/books", bookController.list)

app.post("/v1/books/create", bookController.create)
