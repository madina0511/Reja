console.log("Web Serverni boshlash");

const express = require("express");
const res = require("express/lib/response");
const app = express();
const http = require("http");
const fs = require("fs");
let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
  if (err) {
    console.log("ERRoR: ", err);
  } else {
    user = JSON.parse(data);
  }
});

// 1 KIRISH
app.use(express.static("public")); // public papkamizni requistlarga ochib quyamiz
app.use(express.json()); // json farmatdagi datalarni objlarga aylantirib beradi.
app.use(express.urlencoded({ extended: true })); // html formdan post qilgan narsalarimizni express qabul qiladi.

// 2 Session

// 3  VIEWS CODES / BSSR backend service side rending >> traditional frontend yasash Ejs
app.set("views", "views"); // views: kalit so'z , views: papka nomi; expressga ejs fayl shu yerda db aytish
app.set("view engine", "ejs"); // va expressga ejs engine ishlatayotganini bildirish

// 4 ROUTING CODE

app.post("/create-item", (req, res) => {
  console.log(req.body);
  res.json({ test: "success" });
});

app.get("/author", (req, res) => {
  res.render("author", { user: user });
  console.log("men ishladim");
});

app.get("/", function (req, res) {
  res.render("reja");
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
  console.log(
    `the server is running successfully on port: ${PORT}, http://localhost:${PORT}`
  );
});
