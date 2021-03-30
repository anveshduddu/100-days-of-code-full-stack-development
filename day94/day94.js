const dayNumber = new Date().getDate();
const year = new Date().getFullYear();
const dayName = new Date().toLocaleString("default", {weekday: "long"});
const monthName = new Date().toLocaleString("default", {month: "long"});
var d = new Date();

document.getElementById("demo").innerHTML = d.toTimeString();
document.querySelector(".month-name").innerHTML = monthName;
document.querySelector(".day-name").innerHTML = dayName;
document.querySelector(".date-number").innerHTML = dayNumber;
document.querySelector(".year").innerHTML = year;
