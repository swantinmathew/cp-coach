const express = require("express");

const router = express.Router();

const {

    compareAI

} = require("../controllers/compareAIController");

router.post("/", compareAI);

module.exports = router;