
    let currentInput = '';
    let currentOperation = '';
    let previousInput = '';

    function appendValue(value) {
      currentInput += value;
      document.getElementById('result').value = currentInput;
    }

    function clearResult() {
      currentInput = '';
      currentOperation = '';
      previousInput = '';
      document.getElementById('result').value = '';
    }

    function performOperation(operation) {
      if (currentInput !== '') {
        currentOperation = operation;
        previousInput = currentInput;
        currentInput = '';
      }
    }

    function calculateResult() {
      if (currentInput !== '' && previousInput !== '') {
        let result;
        const num1 = parseFloat(previousInput);
        const num2 = parseFloat(currentInput);

        switch (currentOperation) {
          case '+':
            result = num1 + num2;
            break;
          case '-':
            result = num1 - num2;
            break;
          case '*':
            result = num1 * num2;
            break;
          case '/':
            result = num1 / num2;
            break;
          default:
            result = NaN;
        }

        clearResult();
        document.getElementById('result').value = result;
        currentInput = result.toString();
      }
    }