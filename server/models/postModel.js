const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: [true, "Post with the same title exist already"],
  },
  desc: { type: String, required: true },
  image: { type: String },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "person" },
  createdAt: { type: Date, default: new Date() },
});
module.exports = new mongoose.model("post", postSchema);
