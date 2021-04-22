const fs = require("fs");






module.exports = (app) => {

    fs.readFile("db/db.json", (err, data) => {
        if (err) throw err; 
    
    var currentNotes = JSON.parse(data)



    app.get('/api/notes', (req, res) => res.json(currentNotes));



    app.post('/api/notes', (req, res) => {
          currentNotes.push(req.body);})





    })}


