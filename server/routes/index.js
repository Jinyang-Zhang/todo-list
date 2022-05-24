var express = require("express");
var router = express.Router();
const db = require("../config/db");

router.all("*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type,Autherization"
  );
  res.header("Access-Control-Allow-Methods", "POST,GET,DELETE,PUT");
  next();
});

router.get("/", (req, res, next) => {
  try {
    db.query("select * from todolist", [], function (results, fields) {
      res.json({ message: "sucessful", results, fields });
    });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
});

router.post("/addItem", (req, res, next) => {
  try {
    db.query(
      "insert into todolist(text) values(?)",
      [req.body.text],
      function (results, fields) {
        res.json({ message: "sucessful", results, fields });
      }
    );
  } catch (error) {
    res.json({ error });
  }
});

router.delete("/deleteItem", (req, res, next) => {
  try {
    db.query(
      "delete from todolist where id = ?",
      [req.body.id],
      function (results, fields) {
        res.json({ message: "sucessful", results, fields });
      }
    );
  } catch (error) {
    res.json({ error });
  }
});

module.exports = router;
