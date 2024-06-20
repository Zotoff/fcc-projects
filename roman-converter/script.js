const convertForm = document.querySelector("#converter");
const convertBtn = convertForm.querySelector("#convert-btn");
const convertNumber = convertForm.querySelector("#number");
const output = document.querySelector("#output");

const romanNumerals = [
  ["M", 1000],
  ["CM", 900],
  ["D", 500],
  ["CD", 400],
  ["C", 100],
  ["XC", 90],
  ["L", 50],
  ["XL", 40],
  ["X", 10],
  ["IX", 9],
  ["V", 5],
  ["IV", 4],
  ["I", 1],
];

const setResultText = (text) => {
  output.innerText = text;
};

convertBtn.addEventListener("click", (e) => {
  let convertedNumber = Number(convertNumber.value);
  e.preventDefault();
  let result = "";

  if (convertedNumber === 0) {
    setResultText("Please enter a valid number");
  } else if (convertedNumber < 0) {
    setResultText("Please enter a number greater than or equal to 1");
  } else if (convertedNumber >= 4000) {
    setResultText("Please enter a number less than or equal to 3999");
  } else {
    let num = convertedNumber;
    for (const [symbol, value] of romanNumerals) {
      while (num >= value) {
        result += symbol;
        num -= value;
      }
      setResultText(result);
    }
  }
});
