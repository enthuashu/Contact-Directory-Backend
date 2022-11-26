const express = require("express");
const app = express();
const otpservice = require("./controller/otp");
const userapis = require("./controller/users");

app.use("/api/otp", otpservice);
app.use("/api/user", userapis);

const port = process.env.PORT || 5000; // process.env.PORT gives the port of hosted application, which is automatically defined by deployment platform
app.listen(port, () => console.log(`server is running at ${port}`));
