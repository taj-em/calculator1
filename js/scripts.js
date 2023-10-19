// Buisness Logic
function add(num1, num2) {
  return num1 + num2;
}
function subtract(num1, num2) {
  return num1 - num2;
}
function multiply(num1, num2) {
  return num1 * num2;
}
function divide(num1, num2) {
  return num1 / num2;
}

// User Interface Logic
function calculation(event) {
  event.preventDefault();
  const number1 = parseInt(document.querySelector("input#input1").value);
  const number2 = parseInt(document.querySelector("input#input2").value);
  const operator = document.querySelector("input[name='operator']:checked").value;

  let answer;
  if (operator === "add") {
    answer = add(number1, number2);
  } else if (operator === "subtract") {
    answer = subtract(number1, number2);
  } else if (operator === "multiply") {
    answer = multiply(number1, number2);
  } else if (operator === "divide") {
    answer = divide(number1, number2)
  }
  document.getElementById("answer").innerText = answer;
  document.getElementById("answer-display").removeAttribute("class");
}

window.addEventListener("load", function () {
  let form = document.getElementById("form");
  form.addEventListener("submit", calculation);
});
