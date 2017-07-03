var sql = require("mssql");

var dbConfig = {
    server: "192.168.10.106",
    database: "dbResMaxKB",
    user: "sa",
    password: "abc123*",
    port: 8016
};

function getEmp() {
    var conn = new sql.Connection(dbConfig);

    conn.connect().then(function() {
            var req = new sql.Request(conn);
            req.query("select top 2 * from vwMessageCenterMessages").then(function(recordset) {
                    console.log(recordset);
                    conn.close();
                })
                .catch(function(err) {
                    console.log(err);
                    conn.close();
                });
        })
        .catch(function(err) {
            console.log(err);
        });

    //--> another way
    //var req = new sql.Request(conn);
    //conn.connect(function (err) {
    //    if (err) {
    //        console.log(err);
    //        return;
    //    }
    //    req.query("SELECT * FROM emp", function (err, recordset) {
    //        if (err) {
    //            console.log(err);
    //        }
    //        else { 
    //            console.log(recordset);
    //        }
    //        conn.close();
    //    });
    //});

}

getEmp();