const mongoose = require("mongoose");
const Course = require("../models/Course");
const Lesson = require("../models/Lesson");
const User = require("../models/User");
const UserEnrollment = require("../models/UserEnrollment");
const modelsAdmin = require("../models/models.Admin");
const Certificate = require("../models/Certificate");
const Comment = require("../models/Comment");
const Notification = require("../models/Notification");
const Review = require("../models/Review");
const Search = require("../models/Search");
const UserActivity = require("../models/UserActivity");

module.exports = {
  mongoose,
  Course,
  Lesson,
  User,
  UserEnrollment,
  modelsAdmin,
  Certificate,
  Comment,
  Notification,
  Review,
  Search,
  UserActivity,
};
