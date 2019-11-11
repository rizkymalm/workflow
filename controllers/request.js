const express = require("express");
const ReqDb = require("../models/db");
const app = express();
const moment = require("moment");
const dateformat = require("dateformat");
const now = new Date();

console.log(dateformat(now, "dd/mmm/yyyy"));

exports.getRequest = (req,res) => {
    // return res.render("pages/request");
        var obj = []
        let sql = "SELECT * FROM request_issues";
        let query = ReqDb.con.query(sql, (err,result) => {
            if(err) throw err;
            for(var i=0;i<result.length;i++){
                obj.push({id: result[i].id_request, subject: result[i].subj_req, duedate: result[i].duedate, status: result[i].status, del: result[i].id_request});
            }
            
            return res.render('pages/request',{
                result: result,
                objs : obj,
                jsoon: JSON.stringify(obj)
            })
        })
}

exports.getCreateRequest = (req,res) => {
    let sqlID = "SELECT (id_request) as kode  FROM request_issues ORDER BY created_date DESC, id_request DESC";
    let queryID = ReqDb.con.query(sqlID, (err, resID) => {
        if(err)throw err;
        var getString = resID[0].kode.substr(4,5);
        var countID = parseInt(getString) + 1;
        var newID = "XRQ-"+countID;
        return res.render('pages/createrequest',{
            result: newID
        });
    })
}

exports.getSaveRequest = (req,res) => {
    let getDate = new Date();
    let data = {id_request: req.body.idreq, id_req_from: "12345", id_req_to: req.body.reqto, subj_req: req.body.subject, desc_req: req.body.desc, duedate: req.body.duedate, status: req.body.status, created_date: getDate};
    let sql = "INSERT INTO request_issues set ?";
    let query = ReqDb.con.query(sql, data,(err, result) => {
        if (err) throw err;
        res.redirect('/request');
    });
}
exports.getDetailRequest = (req,res) => {
    ReqDb.con.query("SELECT * FROM user JOIN request_issues ON user.GoogleID=request_issues.id_req_from WHERE id_request='"+req.params.reqId+"'", (err, result) => {
        ReqDb.con.query("SELECT * FROM user WHERE GoogleID=?",result[0].id_req_to,function(err,resemail){
            res.render("pages/detail",  {
                issues: result,
                creator: result[0].email_user,
                assignee: resemail[0].email_user,
                moment: moment
            })
        })

    });
}

exports.getDeleteRequest = (req,re) => {

}

exports.getDeleteRequest = (req,res) => {
    ReqDb.con.query("DELETE FROM request_issues WHERE id_request='"+req.params.reqId+"'", (err) => {
        if (err)throw err;
        res.redirect(baseurl()+"request/");
    });
}