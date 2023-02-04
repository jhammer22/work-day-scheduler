var today = dayjs();
$('#currentDay').text(dayjs().format('MMM D, YYYY h:mm A'));
//  now gets current time parse int turns dayjs sting to integer .format gets time in 24hr time
var now = parseInt(dayjs().format("H"));
  console.log(now);    
//  querySelectorAll calls all id's with time-block and assigns them to  var colorElements
var colorElements = $(".time-block");
console.log(colorElements);  
// split method removed first part of id and only returns number as an array of string's, parseInt takes array of string's and makes them an array of integers in a new variable. Once currentTimeBlockHour was console.log found two digit integers logging last digit 10=0 11=1 etc while now is console logging 1=13 2=14 etc. When anything other than position 1 is passed into parseInt returns NaN in console, if 00 is added to id in html logged integer does not change.
colorElements.each(function(i){
  var timeBlockHour = $(this).attr("id")
  timeBlockHour = timeBlockHour.split("-")[1]
  var currentTimeBlockHour = parseInt(timeBlockHour)
  console.log(timeBlockHour)
  console.log(currentTimeBlockHour)
  console.log($(this).children("textarea"))
  now = 11
  if (now == timeBlockHour) {
    // $(this).children("textarea").css("background-color", "ff6961")
    $(this).addClass("present")
  } else if (now > timeBlockHour) {
    // $(this).children("textarea").css("background-color", "d3d3d3")
    $(this).addClass("past")
  } else  {
    // $(this).children("textarea").css("background-color", "#77dd77")  
    $(this).addClass("future")
  }; 
})

// for (var i = 0; i < colorElements.length; i++) {
//   var timeBlockHour = colorElements[i].id
   
//   if (now == timeBlockHour) {
//     colorElements[i].style.backgroundColor= "ff6961"; 
//   } else if (now > timeBlockHour) {
//     document.getElementById("text").style.backgroundColor= "d3d3d3"
//   } else  {
//     document.getElementById("text").style.backgroundColor = "#77dd77" 
//   }; 
// };  
// 9am text area only now turning green(else statement) if > is used in else if color does not show
  // change to for loop??


// research comparing parsed integer variables using logical comparison














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
