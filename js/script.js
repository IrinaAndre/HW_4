const mathOperation = prompt('What operation do you want to do (add, sub, mult, div)?');
const firstNumber = +prompt('Enter the first number');
const secondNumber = +prompt('Enter the second number');

if (mathOperation == 'add') {
    let result = firstNumber + secondNumber;
    alert(`${firstNumber} + ${secondNumber} = ${result}`)
} else if (mathOperation == 'sub') {
    let result = firstNumber - secondNumber;
    alert(`${firstNumber} - ${secondNumber} = ${result}`)
} else if (mathOperation == 'mult') {
    let result = firstNumber * secondNumber;
    alert(`${firstNumber} * ${secondNumber} = ${result}`)
} else if (mathOperation == 'div') {
    let result = firstNumber / secondNumber;
    alert(`${firstNumber} / ${secondNumber} = ${result}`)
console.log(result, typeof result)
} else {
    alert('Could you repeat it, please')
};