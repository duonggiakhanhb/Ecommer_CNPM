const path = require("path");
const express = require("express");
const app = express();
const BodyParser = require("body-parser");
const publicPath = path.join(__dirname, "../build");
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

app.get("*", (req, res) => {
    res.sendFile(path.join(publicPath, "index.html"));
});
app.listen(port, () => {
    console.log("Server is up!");
});
