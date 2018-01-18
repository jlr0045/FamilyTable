function showAvailability() {
    document.getElementById("listOfAvailablePeople").innerHTML = "Fill me in with names";
}

function dayButtonPressed(dayIn) {
    switch (dayIn) {
        case "m":
            document.getElementByID().innerHTML = "";
            break;
        case "t":
            document.getElementByID().innerHTML = "";
            break;
        case "w":
            document.getElementByID().innerHTML = "";
            break;
        case "r":
            document.getElementByID().innerHTML = "";
            break;
        case "f":
            document.getElementByID().innerHTML = "";
            break;
    }
    //document.getElementById("dayDropdown").classList.toggle("show");
}

function timeButtonPressed() {
    document.getElementById("dayDropdown").classList.toggle("show");
}

function showTableAvailabilityButtonPressed() {
    document.getElementById("dayDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
//window.onclick = function(event) {
//  if (!event.target.matches('.dropbtn')) {
//
//    var dropdowns = document.getElementsByClassName("dropdown-content");
//    var i;
//    for (i = 0; i < dropdowns.length; i++) {
//      var openDropdown = dropdowns[i];
//      if (openDropdown.classList.contains('show')) {
//        openDropdown.classList.remove('show');
//      }
//    }
//  }
//}
