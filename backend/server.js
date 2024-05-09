import bodyParser from "body-parser";
import express from "express";
import mysql from "mysql";
import cors from "cors";
import puppeteer from "puppeteer";
import hbs from "handlebars";
import fs from "fs-extra";
import path from "path";
import { dirname } from 'path';
import { fileURLToPath } from 'url';
    
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
app.use(cors());
app.use(express.json());

const compile = async function (templatename, datas) {
  const filepath = path.join(process.cwd(), `${templatename}.hbs`);

  console.log(filepath);

  //get the html

  console.log(datas);

  const html = await fs.readFile(filepath, "utf8");

  return hbs.compile(html)(datas);
};

async function pdf(datas) {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // console.log(data);
    const content = await compile("index", datas);

    await page.setContent(content);

    // create a pdf here
    await page.pdf({
      path: "output.pdf",
      format: "A4",
      printBackground: true,
    });
    console.log("pdf generated");

    await browser.close();
  } catch {
    console.log("error");
  }
}

app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "signup",
});

app.get('/page4', (req, res) => {
  pdf(datas);
  const filePath = './output.pdf'; // Replace with actual path

  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.error('Error reading PDF:', err.message);
      res.status(500).send('Error downloading PDF');
    } else {
      const contentType = 'application/pdf'; // Or get content type from file metadata
      const contentDisposition = 'attachment; filename="your_pdf.pdf"';

      res.setHeader('Content-Type', contentType);
      res.setHeader('Content-Disposition', contentDisposition);
      res.send(data);
    }
  });
});

app.post("/signup", (req, res) => {
  // console.log(req.body);
  const sqll = "SELECT * FROM login WHERE `email` = ? ";
  db.query(sqll, [req.body.email], (err, data) => {
    if (err) {
      return res.json("error 404");
    } else {
      if (data.length === 0) {
        const sql = "INSERT INTO login (name,email,password) VALUES (?)";
        const values = [req.body.name, req.body.email, req.body.password];

        console.log(values);
        db.query(sql, [values], (err, data) => {
          console.log(err);
          if (err) {
            console.log("Error in inserting data");
            return res.json("Error in inserting data");
          }
          console.log(data);
          return res.json(data);
        });
      } else {
        return res.json("email already registered");
      }
    }
  });
});

app.post("/page3", (req, res) => {
  datas.email = req.body.email;
  datas.position = req.body.position;
  datas.organization = req.body.organization;
  datas.status = req.body.status;
  datas.dateofjoining = req.body.dateofjoining;
  datas.leavingdate = req.body.leavingdate;
  datas.duration = req.body.duration;
  datas.position1 = req.body.position1;
  datas.organization1 = req.body.organization1;
  datas.joiningdate1 = req.body.joiningdate1;
  datas.leavingdate1 = req.body.leavingdate1;
  datas.duration1 = req.body.duration1;
  datas.position2 = req.body.position2;
  datas.organization2 = req.body.organization2;
  datas.joiningdate2 = req.body.joiningdate2;
  datas.leavingdate2 = req.body.leavingdate2;
  datas.duration2 = req.body.duration2;
  datas.teachposition1 = req.body.teachposition1;
  datas.teachemployer1 = req.body.teachemployer1;
  datas.teachcourse1 = req.body.teachcourse1;
  datas.teachnumofstud1 = req.body.teachnumofstud1;
  datas.teachjoiningdate1 = req.body.teachjoiningdate1;
  datas.teachleavingdate1 = req.body.teachleavingdate1;
  datas.teachduration1 = req.body.teachduration1;
  datas.teachposition2 = req.body.teachposition2;
  datas.teachemployer2 = req.body.teachemployer2;
  datas.teachcourse2 = req.body.teachcourse2;
  datas.teachnumofstud2 = req.body.teachnumofstud2;
  datas.teachjoiningdate2 = req.body.teachjoiningdate2;
  datas.teachleavingdate2 = req.body.teachleavingdate2;
  datas.teachduration2 = req.body.teachduration2;
  datas.resposition1 = req.body.resposition1;
  datas.resinstitute1 = req.body.resinstitute1;
  datas.ressupervisor1 = req.body.ressupervisor1;
  datas.resjoiningdate1 = req.body.resjoiningdate1;
  datas.resleavingdate1 = req.body.resleavingdate1;
  datas.resduration1 = req.body.resduration1;
  datas.resposition2 = req.body.resposition2;
  datas.resinstitute2 = req.body.resinstitute2;
  datas.ressupervisor2 = req.body.ressupervisor2;
  datas.resjoiningdate2 = req.body.resjoiningdate2;
  datas.resleavingdate2 = req.body.resleavingdate2;
  datas.resduration2 = req.body.resduration2;
  datas.exorganization1 = req.body.exorganization1;
  datas.exprofile1 = req.body.exprofile1;
  datas.exjoiningdate1 = req.body.exjoiningdate1;
  datas.exleavingdate1 = req.body.exleavingdate1;
  datas.exduration1 = req.body.exduration1;
  datas.exorganization2 = req.body.exorganization2;
  datas.exprofile2 = req.body.exprofile2;
  datas.exjoiningdate2 = req.body.exjoiningdate2;
  datas.exleavingdate2 = req.body.exleavingdate2;
  datas.exduration2 = req.body.exduration2;
  datas.specialization = req.body.specialization;
  datas.research = req.body.research;

  const sqll = "SELECT * FROM `present_employment` WHERE `email` = ?";
  console.log(req.body.email);
  db.query(sqll, [req.body.email], (err, data) => {
    if (err) {
      console.log(err);
      return res.json("Error in inserting data");
    }
    console.log("**********" + data + "**************");
    if (data.length > 0) {
      const value1 = [
        req.body.email,
        req.body.position,
        req.body.organization,
        req.body.status,
        req.body.dateofjoining,
        req.body.leavingdate,
        req.body.duration,
        req.body.email,
      ];
      const value2 = [
        req.body.email,
        req.body.position1,
        req.body.organization1,
        req.body.joiningdate1,
        req.body.leavingdate1,
        req.body.duration1,
        req.body.position2,
        req.body.organization2,
        req.body.joiningdate2,
        req.body.leavingdate2,
        req.body.duration2,
        req.body.email,
      ];
      const value3 = [
        req.body.email,
        req.body.teachposition1,
        req.body.teachemployer1,
        req.body.teachcourse1,
        req.body.teachnumofstud1,
        req.body.teachjoiningdate1,
        req.body.teachleavingdate1,
        req.body.teachduration1,
        req.body.teachposition2,
        req.body.teachemployer2,
        req.body.teachcourse2,
        req.body.teachnumofstud2,
        req.body.teachjoiningdate2,
        req.body.teachleavingdate2,
        req.body.teachduration2,
        req.body.email,
      ];
      const value4 = [
        req.body.email,
        req.body.resposition1,
        req.body.resinstitute1,
        req.body.ressupervisor1,
        req.body.resjoiningdate1,
        req.body.resleavingdate1,
        req.body.resduration1,
        req.body.resposition2,
        req.body.resinstitute2,
        req.body.ressupervisor2,
        req.body.resjoiningdate2,
        req.body.resleavingdate2,
        req.body.resduration2,
        req.body.email,
      ];
      const value5 = [
        req.body.email,
        req.body.exorganization1,
        req.body.exprofile1,
        req.body.exjoiningdate1,
        req.body.exleavingdate1,
        req.body.exduration1,
        req.body.exorganization2,
        req.body.exprofile2,
        req.body.exjoiningdate2,
        req.body.exleavingdate2,
        req.body.exduration2,
        req.body.email,
      ];
      const value6 = [
        req.body.email,
        req.body.specialization,
        req.body.research,
        req.body.email,
      ];
      const value7 = [req.body.email, req.body.confirmation, req.body.email];
      const sql1 =
        "UPDATE `present_employment` SET `email`=?,`position`=?,`organization`=?,`status`=?,`joiningdate`=?,`leavingdate`=?,`duration`=? WHERE `email` = ?";
      const sql2 =
        "UPDATE `employment_history` SET 	`email`=?, `position1`=?,	`organization1`=?,	`joingdate1`=?,	`leavingdate1`=?,	`duration1`=?,	`position2`=?,	`organization2`=?,	`joingdate2`=?,	`leavingdate2`=?,	`duration2`=?	 WHERE `email` = ?";
      const sql3 =
        "UPDATE `teaching_exp` SET 	`email`=?,	`position1`=?,	`employer1`=?,	`course1`=?,	`numofstud1`=?,	`joiningdate1`=?,	`leavingdate1`=?,	`duration1`=?,	`position2`=?,	`employer2`=?,	`course2`=?,	`numofstud2`=?,	`joiningdate2`=?,	`leavingdate2`=?,	`duration2`=?	WHERE `email` = ?";
      const sql4 =
        "UPDATE `res_exp` SET `email`=?,	`position1`=?,	`institute1`=?,	`supervisor1`=?,	`joiningdate1`=?,	`leavingdate1`=?,	`duration1`=?,	`position2`=?,	`institute2`=?,	`supervisor2`=?,	`joiningdate2`=?,	`leavingdate2`=?,	`duration2`=?	 WHERE `email` = ?";
      const sql5 =
        "UPDATE `industrial_exp` SET `email`=?,	`organization1`=?,	`profile1`=?,	`joiningdate1`=?,	`leavingdate1`=?,	`duration1`=?,	`organization2`=?,	`profile2`=?,	`joiningdate2`=?,	`leavingdate2`=?,	`duration2`=?	WHERE `email` = ?";
      const sql6 =
        "UPDATE `areas` SET `email`=?,`specialization`=?,`research`=? WHERE `email`=?";
      db.query(sql1, value1, (err1, data1) => {
        if (err1) {
          console.log("!@#" + err1);
          return res.json("fail");
        }
      });
      db.query(sql2, value2, (err1, data1) => {
        if (err1) {
          console.log("!@#" + err1);
          return res.json("fail");
        }
      });
      db.query(sql3, value3, (err1, data1) => {
        if (err1) {
          console.log("!@#" + err1);
          return res.json("fail");
        }
      });
      db.query(sql4, value4, (err1, data1) => {
        if (err1) {
          console.log("!@#" + err1);
          return res.json("fail");
        }
      });
      db.query(sql5, value5, (err1, data1) => {
        if (err1) {
          console.log("!@#" + err1);
          return res.json("fail");
        }
      });
      db.query(sql6, value6, (err1, data1) => {
        if (err1) {
          console.log("!@#" + err1);
          return res.json("fail");
        }
        return res.json("success");
      });
    } else {
      const value1 = [
        req.body.email,
        req.body.position,
        req.body.organization,
        req.body.status,
        req.body.dateofjoining,
        req.body.leavingdate,
        req.body.duration,
      ];
      const value2 = [
        req.body.email,
        req.body.position1,
        req.body.organization1,
        req.body.joiningdate1,
        req.body.leavingdate1,
        req.body.duration1,
        req.body.position2,
        req.body.organization2,
        req.body.joiningdate2,
        req.body.leavingdate2,
        req.body.duration2,
      ];
      const value3 = [
        req.body.email,
        req.body.teachposition1,
        req.body.teachemployer1,
        req.body.teachcourse1,
        req.body.teachnumofstud1,
        req.body.teachjoiningdate1,
        req.body.teachleavingdate1,
        req.body.teachduration1,
        req.body.teachposition2,
        req.body.teachemployer2,
        req.body.teachcourse2,
        req.body.teachnumofstud2,
        req.body.teachjoiningdate2,
        req.body.teachleavingdate2,
        req.body.teachduration2,
      ];
      const value4 = [
        req.body.email,
        req.body.resposition1,
        req.body.resinstitute1,
        req.body.ressupervisor1,
        req.body.resjoiningdate1,
        req.body.resleavingdate1,
        req.body.resduration1,
        req.body.resposition2,
        req.body.resinstitute2,
        req.body.ressupervisor2,
        req.body.resjoiningdate2,
        req.body.resleavingdate2,
        req.body.resduration2,
      ];
      const value5 = [
        req.body.email,
        req.body.exorganization1,
        req.body.exprofile1,
        req.body.exjoiningdate1,
        req.body.exleavingdate1,
        req.body.exduration1,
        req.body.exorganization2,
        req.body.exprofile2,
        req.body.exjoiningdate2,
        req.body.exleavingdate2,
        req.body.exduration2,
      ];
      const value6 = [
        req.body.email,
        req.body.specialization,
        req.body.research,
      ];
      const value7 = [req.body.email, req.body.confirmation];
      const sql1 =
        "INSERT INTO `present_employment` (`email`, `position`, `organization`, `status`, `joiningdate`, `leavingdate`, `duration`) VALUES (?)";

      const sql2 =
        "INSERT INTO `employment_history` (`email`, `position1`, `organization1`, `joingdate1`, `leavingdate1`, `duration1`, `position2`, `organization2`, `joingdate2`, `leavingdate2`, `duration2`) VALUES (?)";

      const sql3 =
        "INSERT INTO `teaching_exp` (`email`, `position1`, `employer1`, `course1`, `numofstud1`, `joiningdate1`, `leavingdate1`, `duration1`, `position2`, `employer2`, `course2`, `numofstud2`, `joiningdate2`, `leavingdate2`, `duration2`) VALUES (?)";

      const sql4 =
        "INSERT INTO `res_exp` (`email`, `position1`, `institute1`, `supervisor1`, `joiningdate1`, `leavingdate1`, `duration1`, `position2`, `institute2`, `supervisor2`, `joiningdate2`, `leavingdate2`, `duration2`) VALUES (?)";

      const sql5 =
        "INSERT INTO `industrial_exp` (`email`, `organization1`, `profile1`, `joiningdate1`, `leavingdate1`, `duration1`, `organization2`, `profile2`, `joiningdate2`, `leavingdate2`, `duration2`) VALUES (?)";

      const sql6 =
        "INSERT INTO `areas` (`email`,`specialization`, `research`) VALUES (?)";

      db.query(sql1, [value1], (err1, data1) => {
        if (err1) {
          console.log("123456" + err1);
          return res.json("fail");
        }
      });
      db.query(sql2, [value2], (err1, data1) => {
        if (err1) {
          console.log("7890" + err1);
          return res.json("fail");
        }
      });
      db.query(sql3, [value3], (err1, data1) => {
        if (err1) {
          console.log("0987" + err1);
          return res.json("fail");
        }
      });
      db.query(sql4, [value4], (err1, data1) => {
        if (err1) {
          console.log("6543" + err1);
          return res.json("fail");
        }
      });
      db.query(sql5, [value5], (err1, data1) => {
        if (err1) {
          console.log("54321" + err1);
          return res.json("fail");
        }
      });
      db.query(sql6, [value6], (err1, data1) => {
        if (err1) {
          console.log("13579" + err1);
          return res.json("fail");
        }
        return res.json("success");
      });
    }
  });
});

app.post("/page2", (req, res) => {
  datas.email = req.body.email;
  datas.university = req.body.university;
  datas.department = req.body.department;
  datas.nameofphdsupervisor = req.body.nameofphdsupervisor;
  datas.yearofjoining = req.body.yearofjoining;
  datas.dateofsuccess = req.body.dateofsuccess;
  datas.dateofaward = req.body.dateofaward;
  datas.title = req.body.title;
  datas.email = req.body.email;
  datas.mdegree = req.body.mdegree;
  datas.muniversity = req.body.muniversity;
  datas.mbranch = req.body.mbranch;
  datas.myearofjoining = req.body.myearofjoining;
  datas.myearofcompletion = req.body.myearofcompletion;
  datas.mduration = req.body.mduration;
  datas.mpercentage = req.body.mpercentage;
  datas.mdivision = req.body.mdivision;
  datas.email = req.body.email;
  datas.bdegree = req.body.bdegree;
  datas.buniversity = req.body.buniversity;
  datas.bbranch = req.body.bbranch;
  datas.byearofjoining = req.body.byearofjoining;
  datas.byearofcompletion = req.body.byearofcompletion;
  datas.bduration = req.body.bduration;
  datas.bpercentage = req.body.bpercentage;
  datas.bdivision = req.body.bdivision;

  const sqll = "SELECT * FROM `pg_details` WHERE `email` = ?";
  console.log(req.body.email);
  db.query(sqll, [req.body.email], (err, data) => {
    if (err) {
      console.log(err);
      return res.json("Error in inserting data");
    }
    console.log("**********" + data + "**************");
    if (data.length > 0) {
      const sql1 =
        "UPDATE `phd_details` SET `email` = ?,`university`=?,`department`=?,`phd_supervisor`=?,`joining_year`=?,`thesis_date`=?,`award_date`=?,`thesis_title`=? WHERE `email` = ?";
      const sql2 =
        "UPDATE `pg_details` SET `email` = ?,`degree`=?,`university`=?,`branch`=?,`joining_year`=?,`completion_year`=?,`duration`=?,`cgpa`=?,`division`=? WHERE `email` = ?";
      const sql3 =
        "UPDATE `ug_details` SET `email` = ?,`degree`=?,`university`=?,`branch`=?,`joining_year`=?,`completion_year`=?,`duration`=?,`cgpa`=?,`division`=? WHERE `email` = ?";
      const value1 = [
        req.body.email,
        req.body.university,
        req.body.department,
        req.body.nameofphdsupervisor,
        req.body.yearofjoining,
        req.body.dateofsuccess,
        req.body.dateofaward,
        req.body.title,
        req.body.email,
      ];
      const value2 = [
        req.body.email,
        req.body.mdegree,
        req.body.muniversity,
        req.body.mbranch,
        req.body.myearofjoining,
        req.body.myearofcompletion,
        req.body.mduration,
        req.body.mpercentage,
        req.body.mdivision,
        req.body.email,
      ];
      const value3 = [
        req.body.email,
        req.body.bdegree,
        req.body.buniversity,
        req.body.bbranch,
        req.body.byearofjoining,
        req.body.byearofcompletion,
        req.body.bduration,
        req.body.bpercentage,
        req.body.bdivision,
        req.body.email,
      ];
      db.query(sql1, value1, (err1, data1) => {
        if (err1) {
          console.log("!@#" + err1);
          return res.json("fail");
        }
        db.query(sql2, value2, (err1, data1) => {
          if (err1) {
            console.log("!@#" + err1);
            return res.json("fail");
          }
          db.query(sql3, value3, (err1, data1) => {
            if (err1) {
              console.log("!@#" + err1);
              return res.json("fail");
            }
            return res.json("success");
          });
        });
      });
    } else {
      const sql1 =
        "INSERT INTO `phd_details` (`email`, `university`, `department`, `phd_supervisor`, `joining_year`, `thesis_date`, `award_date`, `thesis_title`) VALUES (?) "; // Closing parenthesis added
      const sql2 =
        "INSERT INTO `pg_details` (`email`, `degree`, `university`, `branch`, `joining_year`, `completion_year`, `duration`, `cgpa`, `division`) VALUES (?) "; // Closing parenthesis added
      const sql3 =
        "INSERT INTO `ug_details` (`email`, `degree`, `university`, `branch`, `joining_year`, `completion_year`, `duration`, `cgpa`, `division`) VALUES (?) "; // Closing parenthesis added

      const value1 = [
        req.body.email,
        req.body.university,
        req.body.department,
        req.body.nameofphdsupervisor,
        req.body.yearofjoining,
        req.body.dateofsuccess,
        req.body.dateofaward,
        req.body.title,
      ];
      const value2 = [
        req.body.email,
        req.body.mdegree,
        req.body.muniversity,
        req.body.mbranch,
        req.body.myearofjoining,
        req.body.myearofcompletion,
        req.body.mduration,
        req.body.mpercentage,
        req.body.mdivision,
      ];
      const value3 = [
        req.body.email,
        req.body.bdegree,
        req.body.buniversity,
        req.body.bbranch,
        req.body.byearofjoining,
        req.body.byearofcompletion,
        req.body.bduration,
        req.body.bpercentage,
        req.body.bdivision,
      ];
      db.query(sql1, [value1], (err, data) => {
        if (err) {
          console.log("QWEERTYUIOPLLJGFDSAZXVBNM" + err);
          return res.json("fail");
        }
        db.query(sql2, [value2], (err, data) => {
          if (err) {
            // console.log("QWEERTYUIOPLLJGFDSAZXVBNM"+err);
            return res.json("fail");
          }
          db.query(sql3, [value3], (err, data) => {
            if (err) {
              // console.log("QWEERTYUIOPLLJGFDSAZXVBNM"+err);
              return res.json("fail");
            }
            return res.json("success");
          });
        });
      });
    }
  });
});

const datas = {
  firstname: "",
  middlename: "",
  lastname: "",
  fathername: "",
  nationality: "",
  birthdate: "",
  gender: "",
  marialstatus: "",
  category: "",
  idproof: "",
  photo1: "",
  photo2: "",
  corr_house: "",
  corr_area: "",
  corr_state: "",
  corr_country: "",
  corr_pin: "",
  per_house: "",
  per_area: "",
  per_state: "",
  per_country: "",
  per_pin: "",
  mobile: "",
  alternatemobile: "",
  investor: "",
  email: "",
  alternateemail: "",
  adnumber: "",
  appdate: "",
  appnumber: "",
  postapplied: "",
  department: "",
  email: "",
  university: "",
  department: "",
  nameofphdsupervisor: "",
  yearofjoining: "",
  dateofsuccess: "",
  dateofaward: "",
  title: "",
  email: "",
  mdegree: "",
  muniversity: "",
  mbranch: "",
  myearofjoining: "",
  myearofcompletion: "",
  mduration: "",
  mpercentage: "",
  mdivision: "",
  email: "",
  bdegree: "",
  buniversity: "",
  bbranch: "",
  byearofjoining: "",
  byearofcompletion: "",
  bduration: "",
  bpercentage: "",
  bdivision: "",
  email: "",
  position: "",
  organization: "",
  status: "",
  dateofjoining: "",
  leavingdate: "",
  duration: "",
  email: "",
  position1: "",
  organization1: "",
  joiningdate1: "",
  leavingdate1: "",
  duration1: "",
  position2: "",
  organization2: "",
  joiningdate2: "",
  leavingdate2: "",
  duration2: "",
  email: "",
  teachposition1: "",
  teachemployer1: "",
  teachcourse1: "",
  teachnumofstud1: "",
  teachjoiningdate1: "",
  teachleavingdate1: "",
  teachduration1: "",
  teachposition2: "",
  teachemployer2: "",
  teachcourse2: "",
  teachnumofstud2: "",
  teachjoiningdate2: "",
  teachleavingdate2: "",
  teachduration2: "",
  email: "",
  resposition1: "",
  resinstitute1: "",
  ressupervisor1: "",
  resjoiningdate1: "",
  resleavingdate1: "",
  resduration1: "",
  resposition2: "",
  resinstitute2: "",
  ressupervisor2: "",
  resjoiningdate2: "",
  resleavingdate2: "",
  resduration2: "",
  email: "",
  exorganization1: "",
  exprofile1: "",
  exjoiningdate1: "",
  exleavingdate1: "",
  exduration1: "",
  exorganization2: "",
  exprofile2: "",
  exjoiningdate2: "",
  exleavingdate2: "",
  exduration2: "",
  email: "",
  specialization: "",
  research: "",
};

app.post("/page1", (req, res) => {
  datas.adnumber = req.body.adnumber;
  datas.appdate = req.body.appdate;
  datas.appnumber = req.body.appnumber;
  datas.postapplied = req.body.postapplied;
  datas.department = req.body.department;
  datas.firstname = req.body.firstname;
  datas.middlename = req.body.middlename;
  datas.lastname = req.body.lastname;
  datas.fathername = req.body.fathername;
  datas.nationality = req.body.nationality;
  datas.birthdate = req.body.birthdate;
  datas.gender = req.body.gender;
  datas.marialstatus = req.body.marialstatus;
  datas.category = req.body.category;
  datas.idproof = req.body.idproof;
  datas.photo1 = req.body.photo1;
  datas.photo2 = req.body.photo2;
  datas.corr_house = req.body.corr_house;
  datas.corr_area = req.body.corr_area;
  datas.corr_state = req.body.corr_state;
  datas.corr_country = req.body.corr_country;
  datas.corr_pin = req.body.corr_pin;
  datas.per_house = req.body.per_house;
  datas.per_area = req.body.per_area;
  datas.per_state = req.body.per_state;
  datas.per_country = req.body.per_country;
  datas.per_pin = req.body.per_pin;
  datas.mobile = req.body.mobile;
  datas.alternatemobile = req.body.alternatemobile;
  datas.investor = req.body.investor;
  datas.email = req.body.email;
  datas.alternateemail = req.body.alternateemail;



  const sqll = "SELECT * FROM personal_details WHERE `email` = ?";

  db.query(sqll, [req.body.email], (err, data) => {
    if (err) {
      return res.json("Error in inserting data");
    }
    console.log("**********" + data + "**************");
    if (data.length > 0) {
      //  const sql =  "UPDATE personal_details SET (first_name,middle_name,last_name,father_name,natonality,birthdate,gender,marialstatus,category,id_proof,update_id_proof1,update_id_proof2,email)  VALUES (?) WHERE email = (?) ";
      const sql =
        "UPDATE `personal_details` SET `first_name` = ?,`middle_name` = ?,`last_name` = ?,`father_name` = ?,`natonality` = ?,`birthdate` = ?,`gender` = ?,`marialstatus` = ?,`category` = ?,`id_proof` = ?,`update_id_proof1` = ?,`update_id_proof2` = ?,`email` = ? WHERE `email` = ? ";
      const sql2 =
        "UPDATE `address` SET `email` = ?,`corr_house_no` = ?,`corr_area` = ?,`corr_state` = ?,`corr_country` = ?,`corr_area_pin` = ?,`per_house_no` = ?,`per_area` = ?,`per_state` = ?,`per_country` = ?,`per_area_pin` = ? WHERE `email` = ? ";
      const sql3 =
        "UPDATE `contact_details` SET `email` = ?,`mobile_no` = ?,`alternate_mobile_no` = ?,`investor_implementat` = ?,`personal_email` = ?,`alternate_email` = ? WHERE `email` = ? ";
      const sql4 =
        "UPDATE `aplication_details` SET `email` = ?, `advertisement_no` = ?, `application_date` = ?, `application_no` = ?, `applied_post` = ?, `department` = ? WHERE `email` = ? ";

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
        req.body.email,
        req.body.email,
      ];

      db.query(sql, values, (err1, data1) => {
        if (err1) {
          console.log("!@#" + err1);
          return res.json("fail");
        }
        db.query(
          sql2,
          [
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
            req.body.per_pin,
            req.body.email,
          ],
          (err2, data2) => {
            if (err2) {
              console.log("$%^" + err2);
              return res.json("fail");
            }
            db.query(
              sql3,
              [
                req.body.email,
                req.body.mobile,
                req.body.alternatemobile,
                req.body.investor,
                req.body.email,
                req.body.alternateemail,
                req.body.email,
              ],
              (err3, data3) => {
                if (err3) {
                  console.log("&*()" + err3);
                  return res.json("fail");
                }
                db.query(
                  sql4,
                  [
                    req.body.email,
                    req.body.adnumber,
                    req.body.appdate,
                    req.body.appnumber,
                    req.body.postapplied,
                    req.body.department,
                    req.body.email,
                  ],
                  (err4, data4) => {
                    if (err4) {
                      console.log("QWERT" + err4);
                      return res.json("fail");
                    }
                    return res.json("success");
                  }
                );
              }
            );
          }
        );
      });
    } else {
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
        req.body.email,
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
        req.body.per_pin,
      ];
      const values3 = [
        req.body.email,
        req.body.mobile,
        req.body.alternatemobile,
        req.body.investor,
        req.body.email,
        req.body.alternateemail,
      ];
      const values4 = [
        req.body.email,
        req.body.adnumber,
        req.body.appdate,
        req.body.appnumber,
        req.body.postapplied,
        req.body.department,
      ];

      const sql =
        "INSERT INTO personal_details (first_name,middle_name,last_name,father_name,natonality,birthdate,gender,marialstatus,category,id_proof,update_id_proof1,update_id_proof2,email)  VALUES (?)";
      const sql2 =
        "INSERT INTO address (email,corr_house_no,corr_area,corr_state,corr_country,corr_area_pin,per_house_no,per_area,per_state,per_country,per_area_pin) VALUES (?)";
      const sql3 =
        "INSERT INTO contact_details(email,mobile_no,alternate_mobile_no,investor_implementat,personal_email,alternate_email) VALUES (?)";
      const sql4 =
        "INSERT INTO aplication_details(email,advertisement_no,application_date,application_no,applied_post,department) VALUES (?)";

      db.query(sql, [values], (err, data) => {
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
        if (err) {
          //  console.log(err);
          return res.json("fail");
        }
      });
      db.query(sql4, [values4], (err, data) => {
        if (err) {
          // console.log(err);
          return res.json("fail");
        }
        return res.json("success");
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
    if (data.length > 0) {
      return res.json("success");
    } else {
      return res.json("fail");
    }
  });
});

app.listen(8081, () => {
  console.log("running on port 8081");
});
