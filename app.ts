let count: number = 0;

// Update the count display
const updateCountDisplay = (): void => {
  const countElement = document.getElementById("count");
  //it shows possibly null error on vscode
  //   countElement.textContent = count;
  if (countElement) {
    countElement.textContent = count.toString();
  } else {
    console.error("There is no count found");
  }
};

// Increment the count
const increment = (): void => {
  count++;
  updateCountDisplay();
};

// Decrement the count
const decrement = (): void => {
  count--;
  updateCountDisplay();
};

// Reset the count
const reset = (): void => {
  count = 0;
  updateCountDisplay();
};

// Attach event listeners to buttons
const incrementBtn = document.getElementById(
  "increment-button"
) as HTMLButtonElement | null;
const decrementBtn = document.getElementById(
  "decrement-button"
) as HTMLButtonElement | null;
const restBtn = document.getElementById(
  "reset-button"
) as HTMLButtonElement | null;

//it shows possibly null error on vscode
//document.getElementById( "increment-button").onclick = increment;
// document.getElementById("decrement-button").onclick = decrement;
//document.getElementById('reset-button').onclick = reset;

if (incrementBtn) {
  incrementBtn.onclick = increment;
}
if (decrementBtn) {
  decrementBtn.onclick = decrement;
}
if (restBtn) {
  restBtn.onclick = reset;
}
