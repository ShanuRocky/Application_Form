import bodyParser from "body-parser";
import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.use(bodyParser.urlencoded({extended: true}));

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "signup",
});

app.post("/signup", (req, res) => {
  // console.log(req.body);
  const sql = "INSERT INTO login (name,email,password) VALUES (?)";
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

// app.get("/page1", (req, res) => {
//   console.log(_dirname);
//   return res.sendFile("C:\Users\Shanu kumar\Desktop\faculty\frontend\src\components\Forms\Page2.jsx");
// });

app.post("/page1",(req,res) => 
{
   const sql = "INSERT INTO personal_details (first_name,middle_name,last_name,father_name,natonality,birthdate,gender,marialstatus,category,id_proof,update_id_proof1,update_id_proof2,email)  VALUES (?)";
   console.log(res.body);
   const values = 
   [
      req.body.firstname,
      req.body.middlename,
      req.body.lastname,
      req.body.fathername,
      req.body.nationality,
      req.body.birthdate,
      req.body.gender,
      req.body.marialstatus,
      req.body.category,
      req.body.idproof,
      req.body.photo1,
      req.body.photo2,
      req.body.email
   ]
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

app.post("/login", (req, res) => {
  const sql = "SELECT * FROM login WHERE `email` = ? AND `password` = ?";
  
  console.log(req.body);
  db.query(sql, [req.body.email,req.body.password], (err, data) => {
    //console.log(err);
    if (err) {
      console.log("Error in inserting data");
      return res.json("Error in inserting data");
    }
    if(data.length > 0)
    {
       return res.json("success");
    }else
    {
      return res.json("fail");
    }
  });
});

app.listen(8081, () => {
  console.log("running on port 8081");
});
