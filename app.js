const express = require("express");
const exphdlbars = require("express-handlebars");
const app = express();
const path = require("path");
app.set("view engine", "pug");


//body parser middleware
app.use(express.urlencoded({ extended: false }));


const verifier =(req, res, next) => {
  let date = new Date();
  let day = date.getDay();
  let hours = date.getHours();
if( (day >= 1 && day <= 5)&& (hours >=9 && hours <= 17)){
  next();
} else {
  res.render("index");
}


};
//view engine setup



//static folder
app.use("/public", express.static(path.join(__dirname, "public")));

app.use(verifier);

app.get("/", (req, res) => {
  res.render("home", { title: "Hey", message: "Hello there!" });

});
app.get("/ourServices", (req, res) => {
  res.render("ourServices", { title: "Hey", message: "Hello there!" });
});
app.get("/contactus", (req, res) => {
  res.render("contactus", { title: "Hey", message: "Hello there!" });
});

app.listen(5000, () => {
  console.log("server is running");
});
