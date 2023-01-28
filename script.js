// id's used
  // hour-9
  // hour-10
  // hour-11
  // hour-12
  // hour-1
  // hour-2
  // hour-3
  // hour-4
  // hour-5

  var green = "future";
  var red = "present";
  var nuetral = "past";

var today = dayjs();
$('#currentDay').text(today.format('MMM D, YYYY h:mm A'));


  // TODO: Add code to apply the past, present, or future class to each time block by comparing the id to the current hour. HINTS:

  // How can the id attribute of each time-block be used to conditionally add or remove the past, present, and future classes? 
      // getElementById  
      //if time block is equal to current time append class red
      // else if time block less than current time append class grey
      // else append class green
      // .toggle on class list

// do I need a append time to id function before turning them colors how do my id know what time it is
function colorToggle () {
  var colorElement = document.getElementById("hour-9", "hour-10", "hour-11", "hour-12", "hour-1", "hour-2", "hour-3", "hour-4", "hour-5")
  // colorElement.classList.toggle("red", "green", "nuetral")

}
  
  
  
  
  
  
  
  
  
  // How can Day.js be used to get the current hour in 24-hour time?
      










  // Wrap all code that interacts with the DOM in a call to jQuery to ensure that the code isn't run until the browser has finished rendering all the elements in the html.







// $(".saveBtn").on("click", function (){
//   var textInput = $(this).siblings("textarea").val();
//   var timePlanner = $(this).parent().attr("id");
//   localStorage.setItem(timePlanner, textInput);
// })

// console.log("timePlanner")
// console.log("textInput")

// $("#hour-9").children("textarea").val(localStorage.getItem("#hour-9"));
// $("#hour-10").children("textarea").val(localStorage.getItem("#hour-10"));
// $("#hour-11").children("textarea").val(localStorage.getItem("#hour-11"));
// $("#hour-12").children("textarea").val(localStorage.getItem("#hour-12"));
// $("#hour-1").children("textarea").val(localStorage.getItem("#hour-1"));
// $("#hour-2").children("textarea").val(localStorage.getItem("#hour-2"));
// $("#hour-3").children("textarea").val(localStorage.getItem("#hour-3"));
// $("#hour-4").children("textarea").val(localStorage.getItem("#hour-4"));
// $("#hour-5").children("textarea").val(localStorage.getItem("#hour-5"));





  //class keyword give class a name
    // class Colors{
    //   constructor(green, red, nuetral) {
        // this.green = future;
        // this.red = present;
        // this.nuetral = past;
    //   }
    // }
    // const newColor = new Colors('green', 'red', 'nuetral');
  

  



  
  

