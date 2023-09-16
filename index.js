

document.querySelector("h1").addEventListener("click", calculateAge);

function calculateAge(){

var age = prompt("Enter Your Current age in whole number (0-100) and only in numeric");
var maximumYears = 100;
var maxMonths = 1200;
var maxDays = 36500;
var yearsLeft, monthsLeft, daysLeft;

yearsLeft = maximumYears-age;
monthsLeft = maxMonths-(age*12);
daysLeft = maxDays-(age*365);

alert("Years Left = " + yearsLeft + "\nMonths Left = " + monthsLeft + "\nDays Left = " + daysLeft);
};