const mysql = require("mysql")
const dotenv = require('dotenv'); 

require('dotenv').config()

const connection = mysql.createConnection({
    host:process.env.DB_HOST,
    port:process.env.PORT,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_NAME
})

connection.connect((err)=>{
    if(err){
        console.log(err.sqlMessage)
    }else{
        console.log("database connected")
    }
})

module.exports = {connection}