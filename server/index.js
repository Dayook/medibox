const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const config = require("./config/key");
const { auth } = require("./middleware/auth");
const { User } = require("./model/User");

//application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//application/json
app.use(bodyParser.json());
app.use(cookieParser());

const mongoose = require("mongoose");
mongoose
  .connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

// app.get("/", (req, res) => res.send("Hello World!~~ "));
// app.get("/api/hello", (req, res) => res.send("Hello World!~~ !!!"));
app.use("/api/users", require("./routes/users"))

const port = 5000;

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
