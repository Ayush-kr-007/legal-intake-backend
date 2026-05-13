const express = require("express");

const {
  createSubmission,
  getSubmissions,
} = require("../controllers/submissionController");

const router = express.Router();

router.post("/", createSubmission);

router.get("/", getSubmissions);

module.exports = router;