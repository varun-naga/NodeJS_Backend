require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

//MY ROUTES
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const categoryRoutes = require("./routes/category");
const productRoutes = require("./routes/product");
const orderRoutes = require("./routes/order");
const paymentBRoutes = require("./routes/paymentBRoutes");

//DB CONNECTION
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("DB connected");
  });

// MIDDLEWARES
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

//MY ROUTES
app.use("/api/varun", authRoutes);
app.use("/api/varun", userRoutes);
app.use("/api/varun", categoryRoutes);
app.use("/api/varun", productRoutes);
app.use("/api/varun", orderRoutes);
app.use("/api/varun", paymentBRoutes);

//PORT
const port = process.env.PORT || 8000;

//STARTING A SERVER
app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
