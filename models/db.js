const mysql = require("mysql");
const con = mysql.createConnection({
    host: "remotemysql.com",
    user: "lZKGG9flNN",
    password: "yhif5cxayv",
    database: "lZKGG9flNN"
})

con.connect(err => {
    if (err){
        throw err;
    }
})
module.exports.con = con;   