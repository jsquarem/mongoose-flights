const mongoose = require("mongoose");
const date = new Date();

const dateNextYear = new Date(date.getTime());
dateNextYear.setFullYear(date.getFullYear() + 1);

const destinationSchema = new mongoose.Schema({
  airport: {
    type: String,
    enum: ["AUS", "DFW", "DEN", "LAX", "SAN"],
  },
  arrival: Date,
});

const flightSchema = new mongoose.Schema({
  airline: {
    type: String,
    enum: ["American", "Southwest", "United"],
  },
  airport: {
    type: String,
    enum: ["AUS", "DFW", "DEN", "LAX", "SAN"],
    default: "DEN",
  },
  flightNo: {
    type: Number,
    min: 10,
    max: 9999,
    required: true,
  },
  departs: {
    type: Date,
    default: dateNextYear,
  },
  destinations: [destinationSchema],
});

module.exports = mongoose.model("Flight", flightSchema);
