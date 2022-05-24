var express = require('express');
var router = express.Router();
const db = require("../config/db");

router.all("*", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With,content-type,Autherization");
  res.header("Access-Control-Allow-Methods", "POST,GET,DELETE,PUT");
  next();
});

router.get("/", (req, res, next) => {
  try {
    console.log('get')
      db.query("select * from todolist", [], function(results, fields) {
          res.json({ message: "sucessful", results, fields });
      });
  } catch (error) {
    console.log(error)
      res.json({ error });
  }
});

module.exports = router;
