
"use strict";

function displayResult(message) {
    const resultsDiv = document.getElementById('results');
    const resultDiv = document.createElement('div');
    resultDiv.className = 'result';
    resultDiv.textContent = message;
    resultsDiv.appendChild(resultDiv);
}

console.log("=== ДЕСТРУКТУРИЗАЦИЯ МАССИВОВ ===");

let arr = ['John', 'Smit', 'development', 'programmer', 2000];
let [name, surname, department, position, salary] = arr;
displayResult(`Задание 1: ${name} ${surname}, ${department}, ${position}, ${salary}`);
console.log("-------------");

function func() {
    return ['John', 'Smit', 'development', 'programmer', 2000];
}
let [name1, surname1, department1, position1, salary1] = func();
displayResult(`Задание 2: ${name1} ${surname1}, ${department1}, ${position1}, ${salary1}`);
console.log("-------------");

let arr4 = ['John', 'Smit', 'development', 'programmer', 2000];
let [,, department4, position4] = arr4;
displayResult(`Задание 3: ${department4}, ${position4}`);
console.log("-------------");

let arr5 = ['John', 'Smit', 'development', 'programmer', 2000];
let [name5, surname5, ...info5] = arr5;
displayResult(`Задание 4: ${name5} ${surname5}, Info: ${info5.join(', ')}`);
console.log("-------------");

let arr6 = ['John', 'Smit', 'development', 'programmer'];
let [name6, surname6, department6, position6 = 'trainee'] = arr6;
displayResult(`Задание 5: ${name6} ${surname6}, ${department6}, ${position6}`);
console.log("-------------");

function getDay() {
    return (new Date).getDate();
}
function getMonth() {
    return (new Date).getMonth() + 1;
}
function getYear() {
    return (new Date).getFullYear();
}
let arr7 = [2024, 5];
let [year7 = getYear(), month7 = getMonth(), day7 = getDay()] = arr7;
displayResult(`Задание 6: ${year7}-${month7}-${day7}`);
console.log("-------------");

console.log("=== ДЕСТРУКТУРИЗАЦИЯ ОБЪЕКТОВ ===");

let options8 = {
    color: 'red',
    width:  400,
    height: 500,
};
let {color: color8, width: width8, height: height8} = options8;
displayResult(`Задание 7: ${color8}, ${width8}, ${height8}`);
console.log("-------------");

let options9 = {
    color: 'red',
    width:  400,
    height: 500,
};
let {color: c, width: w, height: h} = options9;
displayResult(`Задание 8: ${c}, ${w}, ${h}`);
console.log("-------------");

let options10 = {
    width:  400,
    height: 500,
};
let {color: color10 = 'black', width: width10, height: height10} = options10;
displayResult(`Задание 9: ${color10}, ${width10}, ${height10}`);
console.log("-------------");

let options11 = {
    width:  400,
    height: 500,
};
let {color: c11 = 'black', width: w11, height: h11} = options11;
displayResult(`Задание 10: ${c11}, ${w11}, ${h11}`);
console.log("-------------");

console.log("=== ДЕСТРУКТУРИЗАЦИЯ В ПАРАМЕТРАХ ФУНКЦИЙ ===");

function func1([name, surname, department, position, salary]) {
    displayResult(`Задание 11: ${name} ${surname}, ${department}, ${position}, ${salary}`);
}
func1(['John', 'Smit', 'development', 'programmer', 2000]);
console.log("-------------");

function func2([name, surname, ...info]) {
    displayResult(`Задание 12: ${name} ${surname}, Info: ${info.join(', ')}`);
}
func2(['John', 'Smit', 'development', 'programmer', 2000]);
console.log("-------------");

function func3([name, surname, department, position = 'junior']) {
    displayResult(`Задание 13: ${name} ${surname}, ${department}, ${position}`);
}
func3(['John', 'Smit', 'development']);
console.log("-------------");

function func4(department, [name, surname], [year, month, day]) {
    displayResult(`Задание 14: ${department}, ${name} ${surname}, ${year}-${month}-${day}`);
}
func4('development', ['John', 'Smit'], [2018, 12, 31]);
console.log("-------------");

function func5({color, width, height}) {
    displayResult(`Задание 15: ${color}, ${width}, ${height}`);
}
func5({color: 'red', width: 400, height: 500});
console.log("-------------");

function func6({width, height, color = 'black'}) {
    displayResult(`Задание 16: ${color}, ${width}, ${height}`);
}
func6({color: 'red', width: 400, height: 500});
console.log("-------------");
