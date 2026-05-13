const Submission = require("../models/Submission");
const categorizeQuery = require("../services/aiService");

const createSubmission = async (req, res) => {
  try {
    const { name, contact, legalQuery } = req.body;

    if (!name || !contact || !legalQuery) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

  const aiResult = await categorizeQuery(req.body.legalQuery);
  console.log(aiResult);

  const submission = await Submission.create({
    ...req.body,
    category: aiResult.category,
    priority: aiResult.priority,
  });

    res.status(201).json({
      success: true,
      message: "Submission stored successfully",
      data: submission,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

const getSubmissions = async (req, res) => {
  try {
    const submissions = await Submission.find().sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      count: submissions.length,
      data: submissions,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

module.exports = {
  createSubmission,
  getSubmissions,
};