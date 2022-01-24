const  express =  require("express");

var notesRouter = express.Router();
const {Note} =require("../../db/models/note.model.js");

notesRouter.get("/", (req, res) => {
  Note.find({}, (err, notes) => {
    if (err) return console.error(err);
    res.json({
      notes,
    });
  });
});
notesRouter.post("/", (req, res) => {
   Note.create(req.body).then((successNote) => {
    res.json({
      note: successNote,
      status: true,
    });
  });
  console.log(req.body);
});

notesRouter.get("/:id", (req, res) => {
  const id = req.params.id;
  Note.findById(id, (err, note) => {
    if (err) {
      console.log(err);
    }
    if (!note) {
      return res.json({ message: "Note not found" });
    }
    res.json({
      msg: "notes id",
      note,
    });
  });
});
notesRouter.delete("/:id", (req, res) => {
  const id = req.params.id;
  Note.findByIdAndRemove(id, (err, response) => {
    console.log(err, res);
    if (err) console.log(err);
    if (!response)
      return res.status(404).json({
        message: "note not found",
      });
    res.json({
      msg: response,
      status: true,
    });
  });
});
notesRouter.put("/:id", (req, res) => {
  const id = req.params.id;
  const updatedBody=req.body;
  Note.findByIdAndUpdate(id,updatedBody,{new:true},(err,updatedNote)=>{
    if(err)
    console.log(err);
    if(!updatedNote)
    return res.status(404).json({
      msg:"could not update because note was not found"
    })
    res.json({
      note:updatedNote,
      status:true
    })
  })
});
module.exports=  {notesRouter}