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

// add event listener to button  - save to local storage and retrieve from local storage when page is refreshed

$(".saveBtn").on("click", function () {
    var entryValue = $(this).prev("textarea").val();
    var entryId = $(this).prev("textarea").attr("id");
    localStorage.setItem(entryId, entryValue);})

$("textarea").each(function () {
    var entryId = $(this).attr("id");
    var entryValue = localStorage.getItem(entryId);
    $(this).val(entryValue);})



