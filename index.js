const express = require("express");
const app = express();
const otpservice = require("./controller/otp");
const userapis = require("./controller/users");
const connectdb = require("./connectors/dbconnection");
require("dotenv").config();

app.use(express.json()); // to enable accepting body from frontend

app.use("/api/otp", otpservice);
app.use("/api/user", userapis);

const port = process.env.PORT || 5000; // process.env.PORT gives the port of hosted application, which is automatically defined by deployment platform

connectdb().then(() => {
  app.listen(port, () => console.log(`server is running at ${port}`));
});
