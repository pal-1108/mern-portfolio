// const express = require("express");
// const cors = require("cors");
// require("dotenv").config();

// const app = express();

// // middleware
// app.use(cors());
// app.use(express.json());
// app.use("/api/contact", contactRoutes);

// // test route
// app.get("/", (req, res) => {
//   res.send("Backend is running 🚀");
// });

// // server start
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });




// const express = require("express");
// const cors = require("cors");
// require("dotenv").config();

// const app = express();

// // ✅ IMPORTANT: routes import karo
// const contactRoutes = require("./routes/contactRoutes");

// // middleware
// app.use(cors());
// app.use(express.json());

// // ✅ route use karo
// app.use("/api/contact", contactRoutes);

// // test route
// app.get("/", (req, res) => {
//   res.send("Backend is running 🚀");
// });

// // server start
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });


const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/portfolioDB")
  .then(() => console.log("MongoDB Connected ✅"))
  .catch(err => console.log(err));

const express = require("express");
const cors = require("cors");
require("dotenv").config();

const contactRoutes = require("./routes/contactRoutes"); // 👈 ADD THIS

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use("/api/contact", contactRoutes);

// test route
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// server start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});