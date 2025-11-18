"use strict";

console.log("=== ФУНКЦИЯ, НАХОДЯЩАЯ СУММУ ЧИСЕЛ С ПОМОЩЬЮ ОПЕРАТОРОВ REST И SPREAD ===");

function average(...nums) {
    let sum = 0;
    for (let num of nums) {
        sum += num;
    }
    return sum / nums.length;
}

console.log("№1:", average(1, 2, 3));
console.log("№1:", average(1, 2, 3, 4));
console.log("№1:", average(1, 2, 3, 4, 5));
console.log("-------------");
