// Problem: create a random arrow left/right and display it

var arrowImg = document.getElementById("arrow").src;
document.getElementById("page").addEventListener("click", displayArrow);

// Create function for random number between 1 - 2
function getRandom() {
  return Math.floor(Math.random() * 2) + 1;
}

/*I created the function because it was displaying the
arrow to fast and then changing the direction*/
function visibility(visibility) {
    setTimeout (function() {
        if(visibility === "visible") {
            arrow.style.visibility = "visible";
        } else {
            arrow.style.visibility = "hidden";
        }
    }, 500)
}

// Based on the result of the random function either display left or right
// Create function for left and right arrow
function displayArrow() {
    var arrow = document.getElementById("arrow");
    arrow.style.visibility = "hidden";
    var direction = document.getElementById("direction");
        if(getRandom() === 1) {
            arrow.src = "img/arrow_left.png"
        } else {
            arrow.src = "img/arrow_right.png"
        }
        visibility("visible");
}