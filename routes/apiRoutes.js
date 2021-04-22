const fs = require("fs");






module.exports = (app) => {

    fs.readFile("db/db.json", (err, data) => {
        if (err) throw err; 
    
    var currentNotes = JSON.parse(data)



    app.get('/api/notes', (req, res) => res.json(currentNotes));



    app.post('/api/notes', (req, res) => {
          currentNotes.push(req.body);
          updateJson();
        })


    app.get("/api/notes/:id", function(req, res) {
        res.json(currentNotes[req.params.id])})


    function updateJson() {
        fs.writeFile("db/db.json",JSON.stringify(currentNotes,'\t'),err => {
            if (err) throw err;
            return true;
        })
    }




    })}


