const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  url: {
    type: String,
    default:
      "https://pixabay.com/photos/burj-al-arab-largest-hotel-in-dubai-2624317/",
    set: (v) =>
      v === ""
        ? "https://pixabay.com/photos/burj-al-arab-largest-hotel-in-dubai-2624317/"
        : v,
  },
  price: Number,
  location: String,
  country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
