// Write a JavaScript program to display the current day and time in the following format.  Go to the editor
// Sample Output :
// Today is: Tuesday
// Current time is: 10:30:38 AM
const days = [
    "Sunday",
    "Monday",
    "Tusday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

let now = new Date();
console.log("Today is: " + days[now.getDay()]);

let currentHours = now.getHours();
let format = " AM";
if (currentHours >= 12) {
    currentHours -= 12;
    format = " PM";
}
console.log("Current time is: " + currentHours + ":" + now.getMinutes() + ":" + now.getSeconds() + format);