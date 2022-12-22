const { Schema, model } = require("mongoose");

const userSchema = Schema(
  {
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      minlength: 6,
      required: true,
    },
    email: {
      type: String,
      match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      unique: true,
      required: true,
    },
    token: {
      type: String,
      default: ""
    }
  },
  { versionKey: false, timestamps: true }
);

const User = model("user", userSchema);

module.exports = User;
