const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const contactRoutes =
require("./routes/contactRoutes");

app.use(
    "/api/contact",
    contactRoutes
);

app.get("/", (req, res) => {

    res.send("WebVerse API Running");

});

const PORT = 5000;

app.listen(PORT, () => {

    console.log(
        `Server Running on Port ${PORT}`
    );

});