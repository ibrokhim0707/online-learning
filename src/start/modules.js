require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require('body-parser');
const config = require("../../config");
const errorHandler = require("../middlewares/error.handler");
const adminRoute = require("../routes/adminRoute");
const authRoute = require("../routes/authRoute");
const coursesRoute = require("../routes/coursesRoute");
const lessonsRoute = require("../routes/lessonsRoute");
const userEnrollmentRoute = require("../routes/userEnrollment");
const userRoute = require('../routes/userRoute');

const app = express();

mongoose
  .connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true, })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use("/api/admin", adminRoute);
app.use("/api/auth", authRoute);
app.use('/api/courses', coursesRoute);
app.use("/api/lessons", lessonsRoute);
app.use('/api/user-enrollments', userEnrollmentRoute); 
app.use('/api/user', userRoute);


app.use(errorHandler);

module.exports = app;
