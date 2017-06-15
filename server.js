const express = require('express');
const app = express();
const postal = require("./postal.js");

app.use(express.static(__dirname + "/public"));
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.get("/", function (request, response) {
  response.sendFile(__dirname + "/public/postal.html");
});

app.get("/calc", function (request, response) {
  postal.get_postage(
    Number(request.query.weight), request.query.type, function (error, results) {
      if (error) {
        error = "<h1>400 " + error + "</h1>";
        console.error(error);
        return response.send(error);
      }
      response.render("pages/results", results);
  });
});

app.set("port", process.env.PORT || 5000);

app.listen(app.get("port"), function () {
  console.log("Postal App Server listening on", app.get("port") + "!");
});
