// let viewed = 0;
// document.addEventListener("DOMContentLoaded", function () {
//   const instructions = document.getElementById("instructions");
//   function showInstructions() {
//     if (!viewed) {
//       instructions.style.opacity = "1";
//       viewed = 1;
//       setTimeout(hideInstructions, 1500);
//     }
//   }
//   function hideInstructions() {
//     instructions.style.opacity = "0";
//   }
//   showInstructions();
// });
$("#album").turn({
  gradients: true,
  acceleration: true,
  display: "single",
  duration: 1500,
});

// Function to turn the page based on click position
function turnPageOnClick(event) {
  var clickX = event.pageX - $("#album").offset().left;
  var flipbookWidth = $("#album").width();

  // If clicked on the left side, go to the previous page
  if (clickX < flipbookWidth / 2) {
    $("#album").turn("previous");
  }
  // If clicked on the right side, go to the next page
  else {
    $("#album").turn("next");
  }
}
$("#album").on("click", turnPageOnClick);

// Get the container element
const swipeContainer = document.getElementById("album");

// Initialize Hammer.js on the container
const hammertime = new Hammer(swipeContainer);

// Set the direction and threshold for swipe detection
hammertime
  .get("swipe")
  .set({ direction: Hammer.DIRECTION_HORIZONTAL, threshold: 50 });

// Function to handle the swipe event
hammertime.on("swipe", function (event) {
  if (event.direction === Hammer.DIRECTION_RIGHT) {
    // Swipe right
    console.log("Swiped right!");
    $("#album").turn("previous");

    // Implement your logic for swipe right action here
  } else if (event.direction === Hammer.DIRECTION_LEFT) {
    // Swipe left
    console.log("Swiped left!");
    $("#album").turn("next");

    // Implement your logic for swipe left action here
  }
});
