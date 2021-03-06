const express = require("express");

const app = express();
const path = require("path");
const PORT = process.env.PORT || 8080;

const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

// middleware that is needed to use POST data

app.use(express.static('public'))

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use("/", htmlRoutes);
app.use("/api", apiRoutes);






app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
})