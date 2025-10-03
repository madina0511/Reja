const http = require("http");

const mongodb = require("mongodb");

let db;
const connectionString =
  "mongodb+srv://madinkashakirovna:wIaHkeuu5Kqq7FUE@cluster0.ziw9lvx.mongodb.net/Reja?retryWrites=true&w=majority";

mongodb.connect(
  connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) console.log("ERROR on connection MongoDB");
    else {
      console.log("MongoDB connection succeed");
      module.exports = client;
      const app = require("./app");
      const server = http.createServer(app);
      let PORT = 4001;
      server.listen(PORT, function () {
        console.log(
          `the server is running successfully on port: ${PORT}, http://localhost:${PORT}`
        );
      });
    }
  }
);
