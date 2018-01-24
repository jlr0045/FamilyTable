function showAvailability() {
    document.getElementById("listOfAvailablePeople").innerHTML = "Fill me in with names";
}

function dayButtonPressed(dayIn) {
    switch (dayIn) {
        case "m":
            document.getElementByID(container).innerHTML = "<h2>Now, how about a time?</h2>\n<button onclick=\"timeButtonPressedMWF(8)\" class=\"timeBtn\">8:00 A.M.</button>\n<button onclick=\"timeButtonPressedMWF(9)\" class=\"timeBtn\">9:00 A.M.</button>\n<button onclick=\"timeButtonPressedMWF(10)\" class=\"timeBtn\">10:00 A.M.</button>\n<button onclick=\"timeButtonPressedMWF(11)\" class=\"timeBtn\">11:00 A.M.</button>\n<button onclick=\"timeButtonPressedMWF(12)\" class=\"timeBtn\">12:00 P.M.</button>\n<button onclick=\"timeButtonPressedMWF(13)\" class=\"timeBtn\">1:00 P.M.</button>\n<button onclick=\"timeButtonPressedMWF(14)\" class=\"timeBtn\">2:00 P.M.</button>\n<button onclick=\"timeButtonPressedMWF(15)\" class=\"timeBtn\">3:00 P.M.</button>\n<button onclick=\"timeButtonPressedMWF(16)\" class=\"timeBtn\">4:00 P.M.</button>\n<button onclick=\"timeButtonPressedMWF(17)\" class=\"timeBtn\">5:00 P.M.</button>";
            break;
        case "t":
            document.getElementByID(container).innerHTML = "";
            break;
        case "w":
            document.getElementByID(container).innerHTML = "";
            break;
        case "r":
            document.getElementByID(container).innerHTML = "";
            break;
        case "f":
            document.getElementByID(container).innerHTML = "";
            break;
    }
    //document.getElementById("dayDropdown").classList.toggle("show");
}

function timeButtonPressedMWF(timeIn) {
  switch (timeIn) {
      case "8":
          document.getElementByID(container).innerHTML = "";
          break;
      case "9":
          document.getElementByID(container).innerHTML = "";
          break;
      case "10":
          document.getElementByID(container).innerHTML = "";
          break;
      case "11":
          document.getElementByID(container).innerHTML = "";
          break;
      case "12":
          document.getElementByID(container).innerHTML = "";
          break;
      case "13":
          document.getElementByID(container).innerHTML = "";
          break;
      case "14":
          document.getElementByID(container).innerHTML = "";
          break;
      case "15":
          document.getElementByID(container).innerHTML = "";
          break;
      case "16":
          document.getElementByID(container).innerHTML = "";
          break;
      case "17":
          document.getElementByID(container).innerHTML = "";
          break;
  }
}

function showTableAvailabilityButtonPressed() {
    document.getElementById("dayDropdown").classList.toggle("show");
}

function timeButtonPressedTR(timeIn) {
  switch (timeIn) {
      case "8":
          document.getElementByID(container).innerHTML = "";
          break;
      case "930":
          document.getElementByID(container).innerHTML = "";
          break;
      case "11":
          document.getElementByID(container).innerHTML = "";
          break;
      case "1230":
          document.getElementByID(container).innerHTML = "";
          break;
      case "14":
          document.getElementByID(container).innerHTML = "";
          break;
      case "1530":
          document.getElementByID(container).innerHTML = "";
          break;
      case "17":
          document.getElementByID(container).innerHTML = "";
          break;
  }
}
