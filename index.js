const http = require("http");
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const User = require("./models/user");
var cors = require("cors");

//===
const app = express();
const bodyparser = require("body-parser");
require("dotenv").config();
const dbURI =
  "mongodb+srv://abouhegaziah:Om123456@cluster0.ozskvkg.mongodb.net/lawyer?retryWrites=true&w=majority";

const server = http.createServer(app);

socketConnection(server);

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
