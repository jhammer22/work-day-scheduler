  // TODO: Add code to apply the past, present, or future class to each time block by comparing the id to the current hour. HINTS:

    // How can the id attribute of each time-block be used to conditionally add or remove the past, present, and future classes? 
      // getElementById  
      // querySelectors 
      // .toggle on class list

var today = dayjs();
$('#currentDay').text(dayjs().format('MMM D, YYYY h:mm A'));


var now = parseInt(dayjs().format("H"))
  console.log(now); 
  //  now gets current time parse int turns dayjs sting to integer .format gets time in 24hr time 

var colorElements = document.querySelectorAll(".time-block")
  //  querySelectorAll calls all id's with time-block and pass's them into var colorElements

for (var i = 0; i < colorElements.length; i++) {
  var timeBlockHour = colorElements[i].id
  timeBlockHour = timeBlockHour.split("-")[1]
  var currentTimeBlockHour = parseInt(timeBlockHour.split("")[1])
  console.log(timeBlockHour)
  console.log(currentTimeBlockHour)
} 
// split method removed first part of id and only returns number as an array of string's, parseInt takes array of string's and makes them an array of integers in a new variable. Once currentTimeBlockHour was console.log found two digit integers logging last digit 10=0 11=1 etc while now is console logging 1=13 2=14 etc. When anything other than position 1 is passed into parseInt returns NaN in console, if 00 is added to id in html logged integer does not change. 

  // could possibly compare now integer to timeBlock string to set boolean 

// let past = document.getElementById("col-8 col-md-10 description").style.backgroundColor=#d3d3d3;
// let present = document.getElementById("col-8 col-md-10 description").style.backgroundColor=#ff6961
// let future = document.getElementById("col-8 col-md-10 description").style.backgroundColor=#77dd77
// 
// text area class= "col-8 col-md-10 description" need to create past, present and future class's
// currentTimeBlockHour is text area used to compare to now and set true false
// compare now integer and currentTimeBlockHour integer to get boolean 

// use boolean to set present and past in if statement with else to set background
  // if now === currentTimeBlockHour set background-color: #ff6961 maybe a way to do this with arrow function (present)
  // if now != currentTimeBlockHour set background-color: #d3d3d3 (past)
  // else set background-color: #77dd77 (future)
  


 
  












$(".saveBtn").on("click", function (){
  var textInput = $(this).siblings("textarea").val();
  var timePlanner = $(this).parent().attr("id");
  localStorage.setItem(timePlanner, textInput);
})
// display saved input to text area from locale storage

console.log("timePlanner");
console.log("textInput");

$("#hour-9").children("textarea").val(localStorage.getItem("#hour-9"));
$("#hour-10").children("textarea").val(localStorage.getItem("#hour-10"));
$("#hour-11").children("textarea").val(localStorage.getItem("#hour-11"));
$("#hour-12").children("textarea").val(localStorage.getItem("#hour-12"));
$("#hour-1").children("textarea").val(localStorage.getItem("#hour-1"));
$("#hour-2").children("textarea").val(localStorage.getItem("#hour-2"));
$("#hour-3").children("textarea").val(localStorage.getItem("#hour-3"));
$("#hour-4").children("textarea").val(localStorage.getItem("#hour-4"));
$("#hour-5").children("textarea").val(localStorage.getItem("#hour-5"));


// Wrap all code that interacts with the DOM in a call to jQuery to ensure that the code isn't run until the browser has finished rendering all the elements in the html.
