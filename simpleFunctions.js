const mwfHTML = "<h2>Now, how about a time?</h2>\n<button onclick=\"timeButtonPressedMWF(8)\" class=\"timeBtn\">8:00 A.M.</button>\n<button onclick=\"timeButtonPressedMWF(9)\" class=\"timeBtn\">9:00 A.M.</button>\n<button onclick=\"timeButtonPressedMWF(10)\" class=\"timeBtn\">10:00 A.M.</button>\n<button onclick=\"timeButtonPressedMWF(11)\" class=\"timeBtn\">11:00 A.M.</button>\n<button onclick=\"timeButtonPressedMWF(12)\" class=\"timeBtn\">12:00 P.M.</button>\n<button onclick=\"timeButtonPressedMWF(13)\" class=\"timeBtn\">1:00 P.M.</button>\n<button onclick=\"timeButtonPressedMWF(14)\" class=\"timeBtn\">2:00 P.M.</button>\n<button onclick=\"timeButtonPressedMWF(15)\" class=\"timeBtn\">3:00 P.M.</button>\n<button onclick=\"timeButtonPressedMWF(16)\" class=\"timeBtn\">4:00 P.M.</button>\n<button onclick=\"timeButtonPressedMWF(17)\" class=\"timeBtn\">5:00 P.M.</button>";

const trHTML = "<h2>Now, how about a time?</h2>\n<button onclick=\"timeButtonPressedTR(8)\" class=\"timeBtn\">8:00 A.M.</button>\n<button onclick=\"timeButtonPressedTR(930)\" class=\"timeBtn\">9:30 A.M.</button>\n<button onclick=\"timeButtonPressedTR(11)\" class=\"timeBtn\">11:00 A.M.</button>\n<button onclick=\"timeButtonPressedTR(1230)\" class=\"timeBtn\">12:30 P.M.</button>\n<button onclick=\"timeButtonPressedTR(14)\" class=\"timeBtn\">2:00 P.M.</button>\n<button onclick=\"timeButtonPressedTR(1530)\" class=\"timeBtn\">3:30 P.M.</button>\n<button onclick=\"timeButtonPressedTR(17)\" class=\"timeBtn\">5:00 P.M.</button>";
let daySelected = "";
let timeSelected = "";


function dayButtonPressed(dayIn) {
  daySelected = dayIn;
  switch (dayIn) {
    case "m":
    case "w":
    case "f":
      document.getElementById('container').innerHTML = mwfHTML;
      break;
    case "t":
    case "r":
      document.getElementById('container').innerHTML = trHTML;
      break;

    }
}

function timeButtonPressedMWF(timeIn) {
  timeSelected = timeIn;
  document.getElementById(container).innerHTML = "";
}

function timeButtonPressedTR(timeIn) {
  timeSelected = timeIn;
  document.getElementById(container).innerHTML = "";
}

function showAvailability() {
  document.getElementById("listOfAvailablePeople").innerHTML = "Fill me in with names";
}

function showTableAvailabilityButtonPressed() {
    document.getElementById("dayDropdown").classList.toggle("show");
}
