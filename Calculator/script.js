let displayValue = '';

function appendValue(value) {
  displayValue += value;
  document.getElementById('display').value = displayValue;
}

function clearDisplay() {
  displayValue = '';
  document.getElementById('display').value = displayValue;
}

function deleteLast() {
  displayValue = displayValue.slice(0, -1);
  document.getElementById('display').value = displayValue;
}

function calculate() {
  try {
    // Use eval() for calculations
    let result = eval(displayValue);

    // Check for Infinity, NaN, and other errors
    if (result === Infinity || result === -Infinity || isNaN(result)) {
      displayValue = '';
      document.getElementById('display').value = 'Error';
    } else {
      // If the operation is '%' (modulo), perform the modulo operation
      if (displayValue.includes('%')) {
        result = result % 100; // Modulo operation for percentage
      }
      displayValue = result.toString();
      document.getElementById('display').value = displayValue;
    }
  } catch (error) {
    displayValue = '';
    document.getElementById('display').value = 'Error';
  }
}
