var express = require("express");
var router = express.Router();

const messages = [
  { text: "Hi there", name: "Amando", added: new Date() },
  { text: "Hello, World!", name: "Linus", added: new Date() },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Message Board", messages: messages });
});

router.get("/new", function (req, res, next) {
  res.render("form");
});

router.post("/new", function (req, res, next) {
  console.log(req.body);
  messages.push({
    text: req.body.text,
    name: req.body.author,
    added: new Date(),
  });
  res.redirect("/");
});

module.exports = router;
