const ReqDb = require("../models/db");
const dateformat = require("dateformat");
const moment = require("moment");
const now = new Date();

exports.getIndex = (req,res) => {
    ReqDb.con.query("SELECT * FROM request_issues WHERE status='open'", (err, result) => {
        res.render("pages/dashboard", {
            issue: result,
            moment: moment
        });
    })
}