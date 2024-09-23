require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
require("./config/mongoose");

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// use router
app.use("/", require("./routes/index"));

app.listen(PORT, (err) => {
    if (!err) {
        console.log(`Server up and running on port number ${PORT}`);
    }
});
