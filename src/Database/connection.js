const mongoose = require("mongoose")
require("dotenv").config()

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;
console.log(dbUser,dbPassword)

const connect = async () =>{
    await mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@estudos.2nsqk.mongodb.net/?retryWrites=true&w=majority&appName=Estudos`)
    .then(console.log("conectado"))
    .catch((err)=>{
        console.log("erro: " + err)
    })
    
}
connect()

module.exports = mongoose