const mongoose= require("mongoose");

const noteSchema = new mongoose.Schema({
  text: String,
  link: String,
});

const Note = mongoose.model("Note", noteSchema);
//export default Note;
module.exports= {Note}
