const router = require("express").Router();

router.get("/hello", async (req, res) => {
  try {
    return res.json({ message: "hello from otp router" });
  } catch (error) {
    return res.status(400).json({ success: false, error: error.message });
  }
});

// api for requesting otp to phone number coming from frontend

//api for verifying otp

module.exports = router;
