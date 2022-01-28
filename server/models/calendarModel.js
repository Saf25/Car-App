"use strict";
const mongoose = require("mongoose");

const EntrySchema = new mongoose.Schema({
  title: {
    type: String,
    required: "Please enter title for calendar entry",
  },
  description: { type: String },
  location: { type: String },
  is_all_day_event: { type: Boolean },
  start_time: { type: Date },
  end_time: { type: Date },
  created_date: {
    type: Date,
    default: new Date(),
  },
});

module.exports = mongoose.model("Entries", EntrySchema);
