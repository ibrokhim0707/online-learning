const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const coursesRoute = require("./routes/coursesRoute");
const authRoute = require("./routes/authRoute");
const lessonsRoute = require("./routes/lessonsRoute");
const userRoute = require("./routes/userRoute");
const userEnrollmentRoute = require("./routes/userEnrollment");
const userActivityRoute = require("./routes/userActivityRoute");
const certificateRoute = require("./routes/certificateRoute");
const commentRoute = require("./routes/commentRoute");
const notificationRoute = require("./routes/notificationRoute");
const searchRoutes = require("./routes/searchRoute");
const reviewRoutes = require("./routes/reviewRoute");
const adminRoutes = require("./routes/adminRoute");
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/api/courses", coursesRoute);
app.use("/api/auth", authRoute);
app.use("/api/lessons", lessonsRoute);
app.use("/api/user", userRoute);
app.use("/api/user-enrollments", userEnrollmentRoute);
app.use("/api/user-activities", userActivityRoute);
app.use("/api/certificates", certificateRoute);
app.use("/api/comments", commentRoute);
app.use("/api/notifications", notificationRoute);
app.use("/api/searches", searchRoutes);
app.use("/api/admins", adminRoutes);
app.use("/api", reviewRoutes);

mongoose
  .connect("mongodb://localhost:27017/online-learning-platform", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    connectTimeoutMS: 30000,  // Ulanish vaqti (millisekund)
    socketTimeoutMS: 45000    // Socket vaqti (millisekund)
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.listen(8100, () => {
  console.log("Server is running on port 8100");
});
