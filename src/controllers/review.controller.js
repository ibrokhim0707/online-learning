const Review = require('../models/Review');

exports.createReview = async (req, res) => {
  const { comment, rating, courseId, userId } = req.body;

  if (!comment || !rating || !courseId || !userId) {
    return res.status(400).json({
      message: 'Review yaratishda barcha maydonlar to\'ldirilishi kerak: comment, rating, courseId, userId.'
    });
  }

  try {
    const review = new Review({ comment, rating, courseId, userId });
    await review.save();
    res.status(201).json(review);
  } catch (err) {
    res.status(500).json({ error: 'Review yaratishda xatolik yuz berdi' });
  }
};


// Reviews ro'yxatini olish
exports.getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find();
    res.status(200).json(reviews);
  } catch (err) {
    res.status(500).json({ error: 'Reviews olishda xatolik yuz berdi' });
  }
};

// Yagona review olish
exports.getReviewById = async (req, res) => {
  const { id } = req.params;

  try {
    const review = await Review.findById(id);
    if (!review) {
      return res.status(404).json({ message: 'Review topilmadi' });
    }
    res.status(200).json(review);
  } catch (err) {
    res.status(500).json({ error: 'Review olishda xatolik yuz berdi' });
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
