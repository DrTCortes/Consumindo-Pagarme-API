const express = require("express");
const router = express();

const {createOrder, consultOrder} = require("../controllers/controller")

router.post("/create-order", createOrder)
router.get("/consult-order/:id", consultOrder)

module.exports = router