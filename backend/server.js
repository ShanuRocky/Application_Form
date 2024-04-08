const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "signup",
});

app.post("/signup", (req, res) => {
  // console.log(req.body);
  const sql = "INSERT INTO login (name,email,password) VALUES (?, ?, ?)";
  const values = [req.body.name, req.body.email, req.body.password];

  console.log(values);
  db.query(sql, [values], (err, data) => {
    // console.log(data);
    console.log(err);
    if (err) {
      console.log("Error in inserting data");
      return res.json("Error in inserting data");
    }
    console.log(data);
    return res.json(data);
  });
});

app.listen(8081, () => {
  console.log("running on port 8081");
});
