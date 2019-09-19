// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



// restaurants reservations (DATA)
// =============================================================
var reservations = [
    {
      name: "jim",
      phoneNumber: "555-999-5555",
      email: "email@domain.com",
      id: 1
    },
    {
      name: "jim",
      phoneNumber: "555-999-5555",
      email: "email@domain.com",
      id: 1
    }
  ];
  
  // Routes
  // =============================================================
  
  //route for home page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });
  

  //route for reserve page
  app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
  });
  

  //route for tables page
  //will display all reservations
  app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
  });

  
  app.get("/tables/data", function(req, res) {
    return res.json(reservations);

  });


  // Create New reservations - takes in JSON input
  app.post("/reserve", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newReservation = req.body;
    console.log("newReservation", newReservation)
  
    // Using a RegEx Pattern to remove spaces from newReservation
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    
    console.log(newReservation);
  
    reservations.push(newReservation);
  
    res.json(newReservation);
  });
  
  // Starts the server to begin listening
  // =============================================================
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  