
    /*     if (global.connection && global.connection.state !== 'disconnected')
            return global.connection;
    
        const mysql = require("mysql2/promise");
        const connection = await mysql.createConnection("mysql://uditech01:Carvalho02@mysql743.umbler.com:41890/appuditech01");
        console.log("Conectou no MySQL!");
        global.connection = connection;
        return connection;
     */
    var mysql = require('mysql');
    var pool = mysql.createPool({
        "user": "uditech01",
        "password": "Carvalho02",
        "database": "appuditech01",
        "host": "mysql743.umbler.com",
        "port": 41890
    });


module.exports = { pool };

