const fs = require("fs");






module.exports = (app) => {

    fs.readFile("db/db.json", (err, data) => {
        if (err) throw err; 
    
    var currentNotes = JSON.parse(data)



    app.get('/api/notes', (req, res) => res.json(currentNotes));



    app.post('/api/notes', (req, res) => {
          var newNote = req.body  
          var id = 0
          for (var i = 0; i < currentNotes.length; i++){
              var noteId = currentNotes[i]
              if (noteId.id > id){
                  id = noteId.id
              }
          }
          newNote.id = id + 1

        
          currentNotes.push(newNote);
          fs.writeFile("db/db.json",JSON.stringify(currentNotes,'\t'),err => {
            if (err) throw err;
           return true
        })
          location.reload()
        })






    })}


