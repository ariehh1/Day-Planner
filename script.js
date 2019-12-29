// //current date variable
// var dt = new Date();
// document.getElementById("datetime").innerHTML = dt.toLocaleDateString();

//moment.js current date and time
var format = "MMMM Do YYYY, h:mm:ss a";
var result = moment().format(format);
console.log(result);
