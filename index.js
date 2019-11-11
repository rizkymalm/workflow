const express = require("express");
const mysql = require("mysql");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const DashboardRouter = require("./routes/dashboard");
const RequestRouter = require("./routes/request");
const dateformat = require('dateformat');
var session = require("express-session");
const app = express();

global.baseurl = function(){
    var url = "http://localhost:8000/";
    return url;
}
var now = new Date();


app.set("view engine","ejs");

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.use("/", DashboardRouter);
app.use("/", RequestRouter);
app.get("/login", (err,res) => {
    res.render('pages/login')
})
app.listen(8000, (err) => {
    if (err) throw err;
})