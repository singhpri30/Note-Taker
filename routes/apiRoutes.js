const express = require("express");
const router = express.Router();

// const store = require("../db/Store.js");
const fs = require("fs");
//const util = require("util");
// const readFileAsync = util.promisify(fs.readFile);
// const writeFileAsync = util.promisify(fs.writeFile);

// fs.readFile("./db/db.json", 'utf8', function (err, data) {

//     // Display the file content 

//     console.log(data);
// });

router.get("/notes", (req, res) => {
    fs.sendFile('./db/db.json', 'utf8', (err, data) => {
        if (err) throw err;
        console.log(data);
        res.json(JSON.parse(data));
    });
})


// router.get("/notes", (req, res) => {

//     store.getNotes(notes)
//         .then((notes) => res.json(notes))
//         .catch((err) => res.status(500).json(err));


// });



// router.post("/notes", (req, res) => {

//     store.addNote(req.body)
//         .then((note) => res.json(note))
//         .catch((err) => res.status(500).json(err));

// })

// router.delete("/notes/:id", (req, res) => {

//     store.removeNote(req.params.id)
//         .then(() => res.json({
//             ok: true
//         }))
//         .catch((err) => res.status(500).json(err));

// })

module.exports = router;