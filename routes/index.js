const express = require("express");
const qs = require("querystring");
const calculator = require("../calculator");

const router = express.Router();
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "APP Teste" });
});

/* Calc page */
router.get("/calc", function (req, res, next) {
  res.render("calculator", { title: "Calculadora" });
});

/* Calc page */
router.post("/calc", function (req, res, next) {
  let result = 0;
  console.log(req.body);
  if (req.body.op == "mul")
    result = calculator.mult(req.body.num1, req.body.num2);
  else if (req.body.op == "sum") {
    result = calculator.sum(req.body.num1, req.body.num2);
  }
  res.render("calculator", {
    title: "Calculadora - Resultado",
    op: req.body.op,
    num1: req.body.num1,
    num2: req.body.num2,
    res: result,
  });
});

module.exports = router;
