const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
const port = 8000;
const cors = require("cors");
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose
  .connect(
    "mongodb://irfan:irfan@ac-pxb8klh-shard-00-00.fiqhhma.mongodb.net:27017,ac-pxb8klh-shard-00-01.fiqhhma.mongodb.net:27017,ac-pxb8klh-shard-00-02.fiqhhma.mongodb.net:27017/?ssl=true&replicaSet=atlas-hii4vt-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB", error);
  });

app.listen(port, () => {
  console.log("Server is running on port 8000");
});
