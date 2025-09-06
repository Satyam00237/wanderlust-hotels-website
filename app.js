const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
  .then(() => {
    console.log("connected to DB..");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

app.get("/", (req, res) => {
  res.send("hello this is root");
});

app.get("/testlisting", async (req, res) => {
  let samplelisting = new Listing({
    title: "my new vila",
    description: "By the beach",
    price: 1200,
    location: "GOA",
    country: "INDIA",
  });

  await samplelisting.save();
  console.log("sample was saved");
  res.send("successful testing...");
});

app.listen(3000, () => {
  console.log("server is running to port 3000");
});
