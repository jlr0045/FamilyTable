function serveTheInfo() {
    document.getElementById("listOfAvailablePeople").innerHTML = "Fill me in with names";
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function dayDropBtn() {
    document.getElementById("dayDropdown").classList.toggle("show");
}

function timeMWFDropBtn() {
    document.getElementById("dayDropdown").classList.toggle("show");
}

function timeTRDropBtn() {
    document.getElementById("dayDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
