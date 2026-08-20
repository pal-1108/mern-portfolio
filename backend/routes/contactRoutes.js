// const express = require("express");
// const router = express.Router();
// const Contact = require("../models/Contact");

// // POST API
// router.post("/", async (req, res) => {
//   try {
//     const { name, email, message } = req.body;

//     // save to DB
//     const newContact = new Contact({ name, email, message });
//     await newContact.save();

//     res.status(200).json({ message: "Message saved successfully" });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ message: "Server error" });
//   }
// });

// module.exports = router;



const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

router.post("/", async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    await newContact.save();
    res.status(200).json({ message: "Saved" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

module.exports = router;