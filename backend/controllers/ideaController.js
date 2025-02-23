const Idea = require("../models/ideaModel");

const submitIdea = async (req, res) => {
  const { name, email, title, description } = req.body;

  if (!name || !email || !title || !description) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const newIdea = new Idea({ name, email, title, description });
    await newIdea.save();
    res.status(201).json({ message: "Idea submitted successfully", newIdea });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

const getIdeas = async (req, res) => {
  try {
    const ideas = await Idea.find();
    res.status(200).json(ideas);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

module.exports = {
  submitIdea,
  getIdeas,
};
