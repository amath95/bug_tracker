const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({

  issue: String,
  priority: String,
  summary: String,
  assignee: String,
  status: String,
  created: {type: Date, default: Date.now()},
  description:String

});

module.exports = mongoose.model("Ticket",ticketSchema);
