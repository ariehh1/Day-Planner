// //current date variable
// var dt = new Date();
// document.getElementById("datetime").innerHTML = dt.toLocaleDateString();

$(document).ready(function() {
  $(".save-button").click(function() {
    var inputValue = $(this)
      .parent()
      .parent()
      .children("td")
      .find("input");

    var time = $(this)
      .parent()
      .parent()
      .children("td")[0]
      .innerHTML.split(":")[0];
    // console.log(time);
    localStorage.setItem(time, inputValue.val());
    // console.log(localStorage.getItem(time));
  });
  console.log(localStorage.getItem("9"));
  $("input#9").val(localStorage.getItem("9"));
  console.log(localStorage.getItem("10"));
  $("input#10").val(localStorage.getItem("10"));
  console.log(localStorage.getItem("11"));
  $("input#11").val(localStorage.getItem("11"));
  console.log(localStorage.getItem("12"));
  $("input#12").val(localStorage.getItem("12"));
  console.log(localStorage.getItem("1"));
  $("input#1").val(localStorage.getItem("1"));
  console.log(localStorage.getItem("2"));
  $("input#2").val(localStorage.getItem("2"));
  console.log(localStorage.getItem("3"));
  $("input#3").val(localStorage.getItem("3"));
  console.log(localStorage.getItem("4"));
  $("input#4").val(localStorage.getItem("4"));
  console.log(localStorage.getItem("5"));
  $("input#5").val(localStorage.getItem("5"));
});

//moment.js current date and time
var NowMoment = moment().format("LLLL");
var eDisplayMoment = document.getElementById("displayMoment");
eDisplayMoment.innerHTML = NowMoment;
// var format = "MMMM Do YYYY, h:mm:ss a";
// var result = moment().format(format);
// console.log(result);

// var currentTime = moment().hour();
// console.log(currentTime);

function timeslotColor() {
  var currentTime = moment().hour();
  console.log(currentTime);
  var inputArray = $("input");
  console.log($("input"));
  inputArray.each(function() {
    //   for (var i = 0; i < inputArray.length; i++) {
    var timeSlotNumber = parseInt($(this).attr("data-time"));
    if (timeSlotNumber < currentTime) {
      $(this).css("background-color", "lightgrey");
    }
  });
}

// current time
var currentTime = moment().hour();
var timeSlotNumber = parseInt($(this).attr("data-time"));
if (timeSlotNumber === currentTime) {
  $(this).css("background-color", "red");
}

//  future time
var currentTime = moment().hour();
var timeSlotNumber = parseInt($(this).attr("data-time"));
if (timeSlotNumber > currentTime) {
  $(this).css("background-color", "lightgreen");
}

timeslotColor();

// if (parseInt($("#9").attr("data-time")) < currentTime) {
//   $("#9").css("background-color", "red");
//   console.log("timepast");
// }
// if (parseInt($("#10").attr("data-time")) < currentTime) {
//   $("#10").css("background-color", "red");
//   console.log("timepast");
// }

// //moment.js past time
// var format = "";
// var result = moment()
//   .startOf("hour")
//   .fromNow();
// console.log(result);

// //moment.js future time
// var format = "";
// var result = moment()
//   .endOf("day")
//   .fromNow();
// console.log(result);
