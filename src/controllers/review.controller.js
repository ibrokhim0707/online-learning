const Review = require("../models/Review");

exports.createReview = async (req, res) => {
  try {
    const review = new Review(req.body);
    await review.save();
    res.status(201).send(review);
  } catch (error) {
    res.status(400).send({ message: "Server error", error: error.message });
  }
};

exports.getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find().populate("user course");
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

exports.getReviewById = async (req, res) => {
  try {
    const review = await Review.findById(req.params.id).populate("user course");
    if (!review) {
      return res.status(404).json({ message: "Review not found" });
    }
    res.status(200).json(review);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

exports.updateReview = async (req, res) => {
  try {
    const { rating, comment } = req.body;
    const review = await Review.findByIdAndUpdate(
      req.params.id,
      { rating, comment },
      { new: true, runValidators: true }
    );
    if (!review) {
      return res.status(404).json({ message: "Review not found" });
    }
    res.status(200).json(review);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

exports.deleteReview = async (req, res) => {
  try {
    const review = await Review.findByIdAndDelete(req.params.id);
    if (!review) {
      return res.status(404).json({ message: "Review not found" });
    }
    res.status(200).json({ message: "Review deleted" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
