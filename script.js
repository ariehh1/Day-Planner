// //current date variable
// var dt = new Date();
// document.getElementById("datetime").innerHTML = dt.toLocaleDateString();

//moment.js current date and time
var format = "MMMM Do YYYY, h:mm:ss a";
var result = moment().format(format);
console.log(result);

//moment.js past time
var format = "";
var result = moment()
  .startOf("hour")
  .fromNow();
console.log(result);

//moment.js future time
var format = "";
var result = moment()
  .endOf("day")
  .fromNow();
console.log(result);

//standard working hours
var hours = [
  "9:00am, 10:00am, 11:00am, 12,00pm, 1:00pm, 2:00pm, 3:00pm, 4:00pm, 5:00pm"
];
