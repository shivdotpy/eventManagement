const mongoose = require("mongoose");

const userModel = mongoose.Schema(
  {
    mobile: Number
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("user", userModel);