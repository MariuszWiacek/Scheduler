// displays current day at top of planner

var currentDay = moment().format(' dddd, MMMM Do YYYY');

// import current day date from moments.js

$("#currentDay").text(currentDay);


//current time

var currentTime = new Date().getHours();

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

// add event listener to buttons save , delete and clear

$(".saveBtn").on("click", function () {
    var entryValue = $(this).prev("textarea").val();
    var entryId = $(this).prev("textarea").attr("id");
   localStorage.setItem(entryId, entryValue);})

   //clear button

   $(".delete")

$("#clear").on("click", function () {

        localStorage.clear();
        $("textarea").val("");
        $(".deleteBtn").remove();
    });





// mmoment.js , 

// DOM Manipulation

// contitional loop

//create timeblocks