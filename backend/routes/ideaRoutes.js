const express = require("express");
const { submitIdea, getIdeas } = require("../controllers/ideaController");
const router = express.Router();

router.post("/submit", submitIdea);
router.get("/", getIdeas);

module.exports = router;
