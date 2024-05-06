import bodyParser from "body-parser";
import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "signup",
});

app.post("/signup", (req, res) => {
  // console.log(req.body);
  const sqll = "SELECT * FROM login WHERE `email` = ? "
  db.query(sqll,[req.body.email],(err,data) => {
    if(err)
    {
      return res.json("error 404");
    }else
    {
      if(data.length === 0)
      {
      const sql = "INSERT INTO login (name,email,password) VALUES (?)";
      const values = [req.body.name, req.body.email, req.body.password];
    
      console.log(values);
      db.query(sql, [values], (err, data) => 
      {
        console.log(err);
        if (err) 
        {
          console.log("Error in inserting data");
          return res.json("Error in inserting data");
        }
        console.log(data);
        return res.json(data);
      });
    }else
    {
       return res.json("email already registered");
    }
    }
  }
);
});

// app.get("/page1", (req, res) => {
//   console.log(_dirname);
//   return res.sendFile("C:\Users\Shanu kumar\Desktop\faculty\frontend\src\components\Forms\Page2.jsx");
// });

app.post("/page1", (req, res) => {
  const sqll = "SELECT * FROM personal_details WHERE `email` = ?";

  db.query(sqll, [req.body.email], (err, data) => 
  {
    if (err) {
      return res.json("Error in inserting data");
    }
    console.log("**********"+data+"**************");
    if (data.length > 0) 
    {
   //  const sql =  "UPDATE personal_details SET (first_name,middle_name,last_name,father_name,natonality,birthdate,gender,marialstatus,category,id_proof,update_id_proof1,update_id_proof2,email)  VALUES (?) WHERE email = (?) ";
   const sql =   "UPDATE `personal_details` SET `first_name` = ?,`middle_name` = ?,`last_name` = ?,`father_name` = ?,`natonality` = ?,`birthdate` = ?,`gender` = ?,`marialstatus` = ?,`category` = ?,`id_proof` = ?,`update_id_proof1` = ?,`update_id_proof2` = ?,`email` = ? WHERE `email` = ? ";
   const sql2 =  "UPDATE `address` SET `email` = ?,`corr_house_no` = ?,`corr_area` = ?,`corr_state` = ?,`corr_country` = ?,`corr_area_pin` = ?,`per_house_no` = ?,`per_area` = ?,`per_state` = ?,`per_country` = ?,`per_area_pin` = ? WHERE `email` = ? ";
   const sql3 =  "UPDATE `contact_details` SET `email` = ?,`mobile_no` = ?,`alternate_mobile_no` = ?,`investor_implementat` = ?,`personal_email` = ?,`alternate_email` = ? WHERE `email` = ? ";
   const sql4 =  "UPDATE `aplication_details` SET `email` = ?, `advertisement_no` = ?, `application_date` = ?, `application_no` = ?, `applied_post` = ?, `department` = ? WHERE `email` = ? "; 
   
   const values = [req.body.firstname,
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
    req.body.email,
    req.body.email];

   db.query(sql, values, (err1, data1) => 
{
  if (err1) 
  {
    console.log("!@#"+err1);
    return res.json("fail");
  }
  db.query(sql2, [ req.body.email,
    req.body.corr_house,
    req.body.corr_area,
    req.body.corr_state,
    req.body.corr_country,
    req.body.corr_pin,
    req.body.per_house,
    req.body.per_area,
    req.body.per_state,
    req.body.per_country,
    req.body.per_pin,
    req.body.email], (err2, data2) => {
    if (err2) {
      console.log("$%^"+err2);
      return res.json("fail");
    }
    db.query(sql3, [req.body.email,
      req.body.mobile,
      req.body.alternatemobile,
      req.body.investor,
      req.body.email,
      req.body.alternateemail,
      req.body.email], (err3, data3) => {
      if (err3) 
      {
        console.log("&*()"+err3);
        return res.json("fail");
      }
      db.query(sql4, [req.body.email,
        req.body.adnumber,
        req.body.appdate,
        req.body.appnumber,
        req.body.postapplied,
        req.body.department,
        req.body.email], (err4, data4) => {
        if (err4) 
        {
          console.log("QWERT"+err4);
          return res.json("fail");
        }
        return res.json("sucess");
      });
    });
  });
});
    } else 
    {
      const values = [
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
      ];
      const values2 = [
        req.body.email,
        req.body.corr_house,
        req.body.corr_area,
        req.body.corr_state,
        req.body.corr_country,
        req.body.corr_pin,
        req.body.per_house,
        req.body.per_area,
        req.body.per_state,
        req.body.per_country,
        req.body.per_pin
      ];
      const values3 = [
        req.body.email,
        req.body.mobile,
        req.body.alternatemobile,
        req.body.investor,
        req.body.email,
        req.body.alternateemail
      ];
      const values4 = [
        req.body.email,
        req.body.adnumber,
        req.body.appdate,
        req.body.appnumber,
        req.body.postapplied,
        req.body.department,
      ];
    
  const sql =  "INSERT INTO personal_details (first_name,middle_name,last_name,father_name,natonality,birthdate,gender,marialstatus,category,id_proof,update_id_proof1,update_id_proof2,email)  VALUES (?)";
  const sql2 = "INSERT INTO address (email,corr_house_no,corr_area,corr_state,corr_country,corr_area_pin,per_house_no,per_area,per_state,per_country,per_area_pin) VALUES (?)";
  const sql3 = "INSERT INTO contact_details(email,mobile_no,alternate_mobile_no,investor_implementat,personal_email,alternate_email) VALUES (?)";
  const sql4 = "INSERT INTO aplication_details(email,advertisement_no,application_date,application_no,applied_post,department) VALUES (?)";

      db.query(sql, [values], (err, data) => 
  {
    if (err) {
     // console.log("QWEERTYUIOPLLJGFDSAZXVBNM"+err);
      return res.json("fail");
    }
  });
  db.query(sql2, [values2], (err, data) => {
    if (err) {
     // console.log("!@#$%^&*()"+err);
      return res.json("fail");
    }
  });
  db.query(sql3, [values3], (err, data) => {
    if (err) 
    {
    //  console.log(err);
      return res.json("fail");
    }
  });
  db.query(sql4, [values4], (err, data) => {
    if (err) {
     // console.log(err);
      return res.json("fail");
    }
    return res.json("sucess");
  });
}
  });
});

app.post("/login", (req, res) => {
  const sql = "SELECT * FROM login WHERE `email` = ? AND `password` = ?";

  console.log(req.body);
  db.query(sql, [req.body.email, req.body.password], (err, data) => {
    //console.log(err);
    if (err) {
      //console.log("Error in inserting data");
      return res.json("Error in inserting data");
    }
    if (data.length > 0) 
    {
      return res.json("success");
    } else 
    {
      return res.json("fail");
    }
  });
});

app.listen(8081, () => {
  console.log("running on port 8081");
});
