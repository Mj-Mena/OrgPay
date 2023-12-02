const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema({
  Username: String,
  Email: String,
  Password: String,
  Phrase: String,
  Balance: Number,
});
const UsersModel = new mongoose.model("users", UsersSchema);

const toPay = new mongoose.Schema({
  Title: String,
  Description: String,
  Amount: String,
  Phrase: String,
  Balance: Number,
});
const topayModel = new mongoose.model("toPay", UsersSchema);
module.exports = UsersModel;
