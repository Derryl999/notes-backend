require("dotenv").config()
const  express =  require("express");
const  cors =  require("cors");
require("./db/index.js")
const {notesRouter}=require( "./api/v1/index.js");
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json())
app.get("/", (req, res) => {
  res.send("hello world");
});


app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
 
app.use('/notes',notesRouter)