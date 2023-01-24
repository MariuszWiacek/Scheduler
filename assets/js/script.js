// displays current day at top of planner

var currentDay = moment().format(' dddd, MMMM Do YYYY');

// import current day date from moments.js

$("#currentDay").text(currentDay);

// Create an array to hold the standard business hours (9AM to 5PM)
var hours = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];

for (var i = 0; i < hours.length; i++) {
    var hour = hours[i];
    var hourIn12Format = moment(hour, "hh A").format('hh A');
    hours[i] = hourIn12Format;
}

// setting colors by adding class to text area

$("textarea").filter(function () {
    return parseInt(this.id) < currentTime;
}).addClass("past");

$("textarea").filter(function () {
    return parseInt(this.id) == currentTime;
}).addClass("present");

$("textarea").filter(function () {
    return parseInt(this.id) > currentTime;
}).addClass("future");


// CREATE TIME BLOCKS


for (var i = 0; i < hours.length; i++) {
    var $timeblock = $("<div>", { class: "time-block" });

    // hour containers
    var $hour = $("<div>", { class: "hour" });
    $hour.html(hours[i]);
    $timeblock.append($hour);

    // Add the timeblock to the container
    $(".container").append($timeblock);

    // Add a textarea to each timeblock
    var $eventTextarea = $("<textarea>", { class: "description" });
    $timeblock.append($eventTextarea);

    // Retrieve the event from local storage and set the textarea value
    var time = hours[i];
    $eventTextarea.val(localStorage.getItem(time));

    
      // Add a delete to each timeblock
      var $delButton = $("<button>", { class: "delBtn" }).html("<i class='fas fa-save' title='Save Event'></i>");
      $timeblock.append($delButton);
      
    // Add a save button to each timeblock
    var $saveButton = $("<button>", { class: "saveBtn" }).html("<i class='fas fa-save' title='Save Event'></i>");
    $timeblock.append($saveButton);


    // Add an event listener to the save button
    $saveButton.on("click", function () {

        // Get the input value
        var inputValue = $(this).siblings(".description").val();
        // Set the textarea value to the input value
        $(this).siblings(".description").val(inputValue);

        // Get the time of the timeblock
        var time = $(this).siblings(".hour").text();

        // Save the event in the local storage
        localStorage.setItem(time, inputValue);

    });
    
// adds styles 
var currentTime = moment().startOf('hour');
if (moment(hours[i], "hh A").isAfter(currentTime)) {
    $timeblock.addClass("future");
} else if (moment(hours[i], "hh A").isSame(currentTime)) {
    $timeblock.addClass("present");
} else {
    $timeblock.addClass("past");
}
    
};