const express = require("express");
const path = require('path');

// SETS UP THE EXPRESS APP
var app = express();
var PORT = process.env.PORT || 3000;

// SETS UP THE EXPRESS APP
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

let tables = [];
let waitlist = [];

class Table {
    constructor(customerName, customerID, customerEmail, phoneNumber) {
        this.customerName = customerName;
        this.customerID = customerID;
        this.customerEmail = customerEmail;
        this.phoneNumber = phoneNumber;
    }
}
class Waitlist {
    constructor(customerName, customerID, customerEmail, phoneNumber) {
        this.customerName = customerName;
        this.customerID = customerID;
        this.customerEmail = customerEmail;
        this.phoneNumber = phoneNumber;
    }
}

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });
app.get("/reservation", function(req, res) {
    res.sendFile(path.join(__dirname, "reservation.html"));
});



app.post('/reservation', (req, res) => {

    if (tables.length < 5) {
        tables.push(new Table(req.body.customerName, req.body.customerID, req.body.customerEmail, req.body.phoneNumber));
    } else {
        waitlist.push(new Waitlist(req.body.customerName, req.body.customerID, req.body.customerEmail, req.body.phoneNumber));
    }
    console.log(tables);
});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });