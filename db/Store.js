// const fs = require("fs");
// // const uuidv1 = require("uuid/v1");
// const util = require("util");


// const readFileAsync = util.promisify(fs.readFile);
// const writeFileAsync = util.promisify(fs.writeFile);
// var id = 100;




// class Store {
//     read() {
//         return readFileAsync("./db/db.json", "utf8")
//     }
//     write(note) {
//         return writeFileAsync("./db/db.json", JSON.stringify(note))
//     }
//     getNotes() {

//         return this.read().then((notes) => {
//             let parseNotes = [];
//             try {
//                 parseNotes = parseNotes.concat(notes)

//             } catch (error) {
//                 parseNotes = [];
//             }
//         })
//     }
//     addNote(note) {
//         const { title, text } = note;
//         if (!title || !text) {
//             throw new Error("Title and text are required")
//         }
//         const newNote = {
//             title: title,
//             text: text,
//             id: id = id + 1

//         }
//         return this.getNotes().then((notes) => [...notes, newNote])
//             .then((updatedNotes) => {
//                 this.write(updatedNotes)
//             })
//             .then(() => {
//                 newNote;
//             })
//     }
//     removeNote(id) {
//         return this.getNotes().then((notes) => notes.filter((note) => note.id !== id))
//             .then((filteredNotes) => {
//                 this.write(filteredNotes);
//             })
//     }

// }

// module.exports = new Store();