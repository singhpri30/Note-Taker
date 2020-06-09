const express = require("express");
const router = express.Router();
const path = require("path");

//this route will display the notes.html page
router.get("/notes", (req, res) => {

    res.sendFile(path.join(__dirname, "..", "public", "notes.html"));

})

//this route will display the index.html page
router.get("*", (req, res) => {

    res.sendFile(path.join(__dirname, "..", "public", "index.html"));

})


//exporting routes
module.exports = router;    