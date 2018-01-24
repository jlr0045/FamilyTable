function showAvailability() {
    document.getElementById("listOfAvailablePeople").innerHTML = "Fill me in with names";
}

function dayButtonPressed(dayIn) {
    switch (dayIn) {
        case "m":
            document.getElementByID(container).innerHTML = "";
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
