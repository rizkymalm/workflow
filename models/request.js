const db  = require('../models/db');
var Request = {
    getRequestByID:function(reqid,callback){
       return db.con.query("SELECT * FROM request_issues WHERE id_request=?",[reqid],callback);
    }
}

module.exports = Request;
