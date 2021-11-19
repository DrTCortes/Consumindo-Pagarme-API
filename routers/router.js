const express = require("express");
const router = express();

const {teste} = require("../controllers/controller")

router.get("/teste", teste)

module.exports = router