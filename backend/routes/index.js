const express = require("express");
const router = express.Router();

// home page route
router.get("/", (req, res) => {
    return res.status(200).json({message: "Hello, World!"});
});

// user router
router.use("/users", require("./users"));
// post router
router.use("/posts", require("./posts"))

module.exports = router;