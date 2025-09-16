console.log("Web Serverni boshlash");

const express = require("express");
const app = express();
const http = require("http");

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

app.get("/", function (req, res) {
  res.render("harid");
});

const server = http.createServer(app);
const PORT = 3000;
server.listen(PORT, function () {
  console.log(`the server is running successfully on port: ${PORT}`);
});
