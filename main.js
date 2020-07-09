// Botones
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');
const zero = document.querySelector('.zero');
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const times = document.querySelector('.times');
const divide = document.querySelector('.divide');
const clear = document.querySelector('.clear');
const equal = document.querySelector('.equal');
const dot = document.querySelector('.dot');

// Display
const textOutput = document.getElementById('text-output');

// Counter de la Calculadora
let valueOutput = '';

// Unir valores
function addValues(num) {
    valueOutput = `${valueOutput}${num}`;
    textOutput.innerHTML = valueOutput;
}

// Añadir listeners a números
zero.addEventListener('click', function () {
    addValues(0);
});
one.addEventListener('click', function () {
    addValues(1);
});
two.addEventListener('click', function () {
    addValues(2);
});
three.addEventListener('click', function () {
    addValues(3);
});
four.addEventListener('click', function () {
    addValues(4);
});
five.addEventListener('click', function () {
    addValues(5);
});
six.addEventListener('click', function () {
    addValues(6);
});
seven.addEventListener('click', function () {
    addValues(7);
});
eight.addEventListener('click', function () {
    addValues(8);
});
nine.addEventListener('click', function () {
    addValues(9);
});

// Listeners a los operadores
plus.addEventListener('click', function () {
    addValues(' + ');
});
minus.addEventListener('click', function () {
    addValues(' - ');
});
times.addEventListener('click', function () {
    addValues(' * ');
});
divide.addEventListener('click', function () {
    addValues(' / ');
});
dot.addEventListener('click', function () {
    addValues('.');
});

// Mostrar Resultado
equal.addEventListener('click', function () {
    const evaluated = eval(valueOutput);
    textOutput.innerHTML = evaluated;
});

// Poner pantalla en ceros
clear.addEventListener('click', function () {
    valueOutput = '';
    textOutput.innerHTML = '';
});

