module.exports = {
  host: process.env.MYSQL_HOST || "127.0.0.1",
  user: "root",
  password: process.env.MYSQL_PASSWORD || "TWzjy-19950825!?",
  port: process.env.MYSQL_PORT || "3306",
  database: process.env.MYSQL_DATABASE || "todoList",
};
