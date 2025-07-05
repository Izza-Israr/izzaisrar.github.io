function startCalculator() {
  document.getElementById("welcomeScreen").style.display = "none";
  document.getElementById("calculatorSection").style.display = "block";
}

function appendValue(value) {
  document.getElementById('display').value += value;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function calculate() {
  let expression = document.getElementById('display').value;

  // Replace ^ with ** for power operation
  expression = expression.replace(/\^/g, '**');

  try {
    let result = eval(expression);
    document.getElementById('display').value = result;
  } catch (error) {
    document.getElementById('display').value = "Error";
  }
}
