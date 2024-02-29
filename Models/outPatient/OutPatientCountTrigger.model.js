const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OpCountTriggerSchema = new Schema({
  count: {
    type: Number,
    unique: true,
    dropDups: true,
  }
});

const OpCountTrigger = mongoose.model(
  "OpTriggerCount",
  OpCountTriggerSchema
);
module.exports = OpCountTrigger;
