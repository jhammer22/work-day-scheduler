var today = dayjs();
$('#currentDay').text(dayjs().format('MMM D, YYYY h:mm A'));

var now = parseInt(dayjs().format("H"));
  console.log(now);    

var colorElements = $(".time-block");
console.log(colorElements);  

colorElements.each(function(i){
  var timeBlockHour = $(this).attr("id")
  timeBlockHour = timeBlockHour.split("-")[1]
  var currentTimeBlockHour = parseInt(timeBlockHour)
  console.log(timeBlockHour)
  console.log(currentTimeBlockHour)
  console.log($(this).children("textarea"))
  now = now
  if (now == timeBlockHour) {
    $(this).addClass("present")
  } else if (now > timeBlockHour) {
    $(this).addClass("past")
  } else  { 
    $(this).addClass("future")
  }; 
})

loadInfo();

$(".saveBtn").on("click", function (){
  var textInput = $(this).siblings("textarea").val();
  var timePlanner = $(this).parent().attr("id");
  localStorage.setItem(timePlanner, textInput);
});

function loadInfo() {
  
  console.log(localStorage.getItem("hour-11"))
  $('#hour-09 .description').val(localStorage.getItem('hour-09'));
  $('#hour-10 .description').val(localStorage.getItem('hour-10'));
  $('#hour-11 .description').val(localStorage.getItem('hour-11'));
  $('#hour-12 .description').val(localStorage.getItem('hour-12'));
  $('#hour-13 .description').val(localStorage.getItem('hour-13'));
  $('#hour-14 .description').val(localStorage.getItem('hour-14'));
  $('#hour-15 .description').val(localStorage.getItem('hour-15'));
  $('#hour-16 .description').val(localStorage.getItem('hour-16'));
  $('#hour-17 .description').val(localStorage.getItem('hour-17'));
}
