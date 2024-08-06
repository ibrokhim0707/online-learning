const Course = require("../models/Course");

exports.getCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.status(200).json(courses);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.createCourse = async (req, res) => {
  const { title, description, photo, lessonsCount } = req.body;

  try {
    const newCourse = new Course({ title, description, photo, lessonsCount });
    await newCourse.save();
    res.status(201).json(newCourse);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.updateCourse = async (req, res) => {
  const { id } = req.params;
  const { title, description, photo, lessonsCount } = req.body;

  try {
    const updatedCourse = await Course.findByIdAndUpdate(
      id,
      { title, description, photo, lessonsCount },
      { new: true, runValidators: true }
    );

    if (!updatedCourse) {
      return res.status(404).json({ message: "Course not found" });
    }

    res.status(200).json(updatedCourse);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.deleteCourse = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedCourse = await Course.findByIdAndDelete(id);

    if (!deletedCourse) {
      return res.status(404).json({ message: "Course not found" });
    }

    res.status(200).json({ message: "Course deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
