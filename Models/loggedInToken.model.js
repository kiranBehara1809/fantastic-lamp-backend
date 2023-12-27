const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LoggedInTokensSchema = new Schema({
  userName: {
    type: String,
    unique: true,
    dropDups: true,
  },
  userId: {
    type: String,
    unique: true,
    dropDups: true,
  },
  token: {
    type: String,
    default: null,
    required: false,
  },
});

const LoggedInTokens = mongoose.model("loggedInTokens", LoggedInTokensSchema);
module.exports = LoggedInTokens;
