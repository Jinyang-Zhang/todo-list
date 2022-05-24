const mysql = require("mysql2");
const dbConfig = require("./db.config");

module.exports = {
  query: function (sql, params, callback) {
    const connection = mysql.createConnection(dbConfig);
    connection.connect(function (err) {
      if (err) {
        throw err;
      }
      connection.query(sql, params, function (err, results, fields) {
        if (err) {
          throw err;
        }
        callback &&
          callback(
            results ? JSON.parse(JSON.stringify(results)) : null,
            fields ? JSON.parse(JSON.stringify(fields)) : null
          );
        connection.end(function (err) {
          if (err) {
            console.log("connect failed");
            throw err;
          }
        });
      });
    });
  },
};
