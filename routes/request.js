// const mysql = require("mysql");
const express = require("express");
const RequestController = require("../controllers/request");
const Request = require("../models/request");
const dateformat = require("dateformat");
const Router = express.Router();


Router.get("/request", RequestController.getRequest);
Router.get("/request/create", RequestController.getCreateRequest);
Router.post("/save", RequestController.getSaveRequest);
Router.get("/delete/:reqId", RequestController.getDeleteRequest);
Router.get("/request/detail/:reqId", RequestController.getDetailRequest)
// Router.get("/request/detail/:reqId", function(req,res,next){
//     if(req.params.reqId){
//         Request.getRequestByID(req.params.reqId,function(err,rows){
//             if(err){
//                 res.send(req.params.reqId)
//             }else{
//                 db.con.query("SELECT * FROM user WHERE GoogleID=?",rows[0].id_req_from,function(err,rows2){
//                     res.render('pages/detail',{
//                         issues: rows,
//                         duedate: dateformat(rows[0].duedate, "dd/mmm/yyyy"),
//                         createddate: dateformat(rows[0].created_date, "dd/mmm/yyyy"),
//                         email: rows2[0].email_user
//                     })
//                 })
//             }
//         })
//     }
// });

module.exports = Router;