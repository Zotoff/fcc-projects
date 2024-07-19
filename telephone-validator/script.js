const form = document.querySelector("#check-form");
const checkButton = form.querySelector("#check-btn");
const clearButton = form.querySelector("#clear-btn");
const result = document.querySelector("#results-div");

const validPatterns = [
  /^1?\s?\(\d{3}\)\s?\d{3}-\d{4}$/,  // 1 (555) 555-5555 or (555) 555-5555
  /^1?\s?\d{3}-\d{3}-\d{4}$/,        // 1 555-555-5555 or 555-555-5555
  /^1?\s?\d{3}\s\d{3}\s\d{4}$/,      // 1 555 555 5555 or 555 555 5555
  /^1?\d{10}$/                       // 15555555555 or 5555555555
];

checkButton.addEventListener("click", (evt) => {
  evt.preventDefault();
  const userInput = form.querySelector("#user-input").value;

  console.log(userInput);

  if (userInput === "") {
    alert("Please provide a phone number");
    return;
  } else {
    const isValid = validPatterns.some(pattern => pattern.test(userInput));
    const isInvalidNumber = /^1\s?\(?\d{3}\)?\d{7}$/.test(userInput);

    if (isValid) {
      result.textContent = `Valid US number: ${userInput}`;
    } else if (isInvalidNumber) {
      result.textContent = `Invalid US number: ${userInput}`;
    } else {
      result.textContent = `Invalid US number: ${userInput}`;
    }
  }
});

clearButton.addEventListener("click", (evt) => {
  evt.preventDefault();
  form.reset();
  result.innerHTML = "";
});