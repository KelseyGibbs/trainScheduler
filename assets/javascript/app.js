$(document).ready(function() {
      // Initialize Firebase
  var config = {
    apiKey: "AIzaSyD8vW1kYuGekSYhETM8MIlox6IHBRmrFug",
    authDomain: "project1-47baf.firebaseapp.com",
    databaseURL: "https://project1-47baf.firebaseio.com",
    projectId: "project1-47baf",
    storageBucket: "project1-47baf.appspot.com",
    messagingSenderId: "160356513760"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

$(".btn").on("click", function(event) {
    event.preventDefault();
    
    var trainName = $("#nameInput").val().trim();
    var destination = $("#destinationInput").val().trim();
    var firstTrain = moment($("#timeInput").val().trim(), "HH:mm").format("HH:mm");
    var frequency = $("#minutesInput").val().trim();
    console.log(firstTrain);

  // Creates local "temporary" object for holding train information
  var newTrain = {
    trainNameData: trainName,
    destinationData: destination,
    firstTrainData: firstTrain,
    frequencyData: frequency
  };

  // Uploads employee data to the database
  database.ref().push(newTrain);

  $("#nameInput").val("");
  $("#destinationInput").val("");
  $("#timeInput").val("");
  $("#minutesInput").val("");

});

// Create Firebase event for adding train data to the database and a row in the html when a user adds an entry

database.ref().on("child_added", function(childSnapshot) {
    console.log(childSnapshot.val());
  
    // Store everything into a variable.
    var trainNameData = childSnapshot.val().trainNameData;

  
    // Employee Info
    console.log(trainNameData);



});

});