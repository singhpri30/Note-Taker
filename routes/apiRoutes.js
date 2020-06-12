const express = require("express");
const router = express.Router();
const fs = require("fs");

let noteData = [];


const test = fs.readFileSync("./db/db.json", "utf8");
//console.log(test);

router.get("/notes", (req, res) => {

    res.sendFile(path.join(__dirname, "..", "db", "db.json"));

    // fs.readFile("./db/db.json", 'utf8', (err, noteData) => {
    //     if (err) {
    //         return console.log(err);
    //     }
    //     console.data(noteData)
    //     res.send(noteData);
    // });


})

router.post("/notes", (req, res) => {
    var newNoteData = req.body;

    fs.writeFile("./db/db.json", JSON.stringify(newNoteData), (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
    noteData.push(newNoteData);
    res.json(newNoteData);

})


module.exports = router;