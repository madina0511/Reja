console.log("Web Serverni boshlash");

const express = require("express");
const res = require("express/lib/response");
const app = express();

const fs = require("fs");

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
  if (err) {
    console.log("ERRoR: ", err);
  } else {
    user = JSON.parse(data);
  }
});

// MONGODB chaqirish
const db = require("./server").db(); // qalam
const mongodb = require("mongodb");

// 1 KIRISH
app.use(express.static("public")); //Middleware design pattern public papkamizni requistlarga ochib quyamiz
app.use(express.json()); // json farmatdagi datalarni objlarga aylantirib beradi.
app.use(express.urlencoded({ extended: true })); // html formdan post qilgan narsalarimizni express qabul qiladi.

// 2 Session

// 3  VIEWS CODES / BSSR backend service side rending >> traditional frontend yasash Ejs
app.set("views", "views"); // views: kalit so'z , views: papka nomi; expressga ejs fayl shu yerda db aytish
app.set("view engine", "ejs"); // va expressga ejs engine ishlatayotganini bildirish

// 4 ROUTING CODE

app.post("/create-item", (req, res) => {
  console.log("user entered /create-item");
  console.log("req: ", req.body);
  const new_reja = req.body.reja;
  db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
    console.log(data.ops);
    res.json(data.ops[0]);

    // if (err) {
    //   console.log(err);
    //   res.end("something went wrong!");
    // } else {
    //   res.end("successfully added.");
    // }
  });
});
app.post("/delete-item", (req, res) => {
  const id = req.body.id;
  console.log(id);
  // res.end("done");
  db.collection("plans").deleteOne(
    { _id: new mongodb.ObjectId(id) },
    function (err, data) {
      res.json({ state: "success" });
    }
  );
});
app.post("/edit-item", (req, res) => {
  const data = req.body;
  console.log(data);
  db.collection("plans").findOneAndUpdate(
    {
      _id: new mongodb.ObjectId(data.id),
    },
    { $set: { reja: data.new_input } },
    function (err, data) {
      res.json({ state: "success" });
    }
  );
});

app.post("/delete-all", (req, res) => {
  if (req.body.delete_all) {
    db.collection("plans").deleteMany(function () {
      res.json({ state: "hamma rejalar o'chirildi" });
    });
  }
});

app.get("/author", (req, res) => {
  res.render("author", { user: user });
  console.log("men ishladim");
});

app.get("/", function (req, res) {
  console.log("user entered /");
  db.collection("plans")
    .find()
    .toArray((err, data) => {
      if (err) {
        console.log(err);
        res.end("Something went wrong!");
      } else {
        res.render("reja", { items: data });
      }
    });
});

module.exports = app;
