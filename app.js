// Preparing server side by importing mongoose, body-parser, express

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

// Importing a defined ticket schema model
const Ticket = require('./Ticket');

const app = express();


//Connecting to mongoDB
mongoose.connect(process.env.URI)

//Allowing access to public folder containing css and javascript
app.use(express.static("public"));

//Allowing my server to use body-parser
app.use(bodyParser.urlencoded({
  extended: true
}));


//Defining and calling my get function from when the client makes a request to my server
// Server will respond by sending the index.html sendFile
//__dirname gets the home directory, so it does not have to be sepcified
app.get('/', function(req, res) {

  res.sendFile(__dirname + "/index.html");

});

//Post function handles posting data from form to database

app.post('/', async function(req, res) {

  const run = async () => {

    const ticket = await Ticket.create({

      issue: req.body.issue_select,
      priority: req.body.priority,
      summary: req.body.summary,
      assignee: null,
      status: "open",
      created:  Date.now(),
      description:req.body.description
    });

    console.log(ticket);

  };

  run().then(() => {
    console.log("Ticket Created");
  }).catch((e) => {
    console.log(e);
  });

});

//Listening on server for requests
app.listen(process.env.PORT);
