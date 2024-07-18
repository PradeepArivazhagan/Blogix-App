const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const articlerouter = require("./routes/route");

const app = express();
app.use(json());
app.use(cors());

app.use("/articles", articlerouter);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    app.listen(process.env.PORT_NUM, () => {
      console.log("MongoDB is Connected and Server is Listening");
    });
  })
  .catch((e) => {
    console.log(`Error: ${e.message}`);
  });
