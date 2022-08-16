const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const port = process.env.PORT || 5000;
const eventRouter = require("./src/router/eventRouter");
const userRouter = require("./src/router/userRouter");
const volunteeringRouter = require("./src/router/volunteeringRouter");
const stripe = require("./src/router/stripe");
const cors = require("cors");
const dotenv = require("dotenv");

// require("dotenv").config(); //
dotenv.config({path:'./config.env'});
const app = express();

mongoose
.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useCreateIndex: true,
  // useFindAndModify: false,
})
.then(() => {
  console.log("Connected to database");
})
.catch((error) => {
  console.log(`can not connect to database, ${error}`);
});

app.use(cors({ origin: true, credentials: true }));
app.use(express.json({limit:'50mb'}));

app.use(bodyParser.urlencoded({limit:'50mb', extended: true }));

app.use("/user", userRouter);
app.use("/event", eventRouter);
app.use("/volunteering", volunteeringRouter);
app.use("/payment", stripe);

app.listen(port, () => {
  console.log("listening to port " + port);
});
