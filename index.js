const http = require("http");
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
var cors = require("cors");

//===
const CaseRoute = require("./routes/Case");
const DataRoute = require("./routes/Data");
const BlogRoute = require("./routes/Blog");
//==
const app = express();
const bodyparser = require("body-parser");
require("dotenv").config();
const dbURI =
  "mongodb+srv://abouhegaziah:Om123456@cluster0.ozskvkg.mongodb.net/lawyer?retryWrites=true&w=majority";

const server = http.createServer(app);

mongoose.set("strictQuery", false);
mongoose
  .connect(dbURI)
  .then((result) =>
    server.listen(4000, () => {
      console.log("listening for requests on port 4000");
    })
  )
  .catch((err) => console.log(err));

app.use(cors()); //

app.use(express.static("public"));
app.use(morgan("dev"));
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

app.use("/case", CaseRoute);
app.use("/data", DataRoute);
app.use("/blog", BlogRoute);
