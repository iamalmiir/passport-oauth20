const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  facebookId: {
    type: String,
    required: true,
  },
  displayName: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("FaceBookUser", UserSchema);