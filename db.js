async function connect() {
    if (global.connection && global.connection.state !== 'disconnected')
        return global.connection;

    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection("mysql://uditech01:Carvalho02@mysql743.umbler.com:41890/appuditech01");
    console.log("Conectou no MySQL!");
    global.connection = connection;
    return connection;

}
module.exports  = {connect};

