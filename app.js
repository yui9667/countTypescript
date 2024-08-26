var count = 0;
// Update the count display
var updateCountDisplay = function () {
    var countElement = document.getElementById("count");
    //it shows possibly null
    //   countElement.textContent = count;
    if (countElement) {
        countElement.textContent = count.toString();
    }
    else {
        console.error("There is no count found");
    }
};
// Increment the count
var increment = function () {
    count++;
    updateCountDisplay();
};
// Decrement the count
var decrement = function () {
    count--;
    updateCountDisplay();
};
// Reset the count
var reset = function () {
    count = 0;
    updateCountDisplay();
};
// Attach event listeners to buttons
var incrementBtn = document.getElementById("increment-button");
var decrementBtn = document.getElementById("decrement-button");
var restBtn = document.getElementById("reset-button");
//it shows possibly null
//document.getElementById( "increment-button").onclick = increment;
// document.getElementById("decrement-button").onclick = decrement;
// document.getElementById("reset-button").onclick = reset;
if (incrementBtn) {
    incrementBtn.onclick = increment;
}
if (decrementBtn) {
    decrementBtn.onclick = decrement;
}
if (restBtn) {
    restBtn.onclick = reset;
}
