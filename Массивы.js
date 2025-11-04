"use strict";

console.log("=== МАССИВЫ В JAVASCRIPT ===");

// №1 - Создание массива с числами и вывод
let arr1 = [1, 2, 3];
console.log(arr1);

// №2 - Создание массива со строками и вывод
let arr2 = ['a', 'b', 'c'];
console.log(arr2);

console.log("=== ПОЛУЧЕНИЕ ЭЛЕМЕНТОВ МАССИВОВ В JAVASCRIPT ===");

// №1 - Вывод элементов массива [1, 2, 3]
let arr3 = [1, 2, 3];
console.log(arr3[0]);
console.log(arr3[1]);
console.log(arr3[2]);
console.log("--------");
// №2 - Вывод элементов массива [1, 2, 3] (другой массив)
let arr4 = [1, 2, 3];
console.log(arr4[0]);
console.log(arr4[1]);
console.log(arr4[2]);
console.log("--------");
// №3 - Сумма элементов массива [1, 2, 3]
let arr5 = [1, 2, 3];
console.log(arr5[0] + arr5[1] + arr5[2]);
console.log("--------");
// №4 - Формирование строки из массива ['a', 'b', 'c', 'd']
let arr6 = ['a', 'b', 'c', 'd'];
console.log(arr6[0] + arr6[1] + arr6[1] + '+' + arr6[2] + arr6[3]);

console.log("=== ДЛИНА МАССИВА В JAVASCRIPT ===");

// №1 - Количество элементов в массиве
let arr7 = [1, 'a', true, null];
console.log(arr7.length);

// №2 - Последний элемент массива
let arr8 = [1, 'a', true, null];
console.log(arr8[arr8.length - 1]);

console.log("=== ИЗМЕНЕНИЕ ЭЛЕМЕНТОВ МАССИВА В JAVASCRIPT ===");

// №1 - Замена элементов массива ['a', 'b', 'c'] на числа
let arr9 = ['a', 'b', 'c'];
arr9[0] = 1;
arr9[1] = 2;
arr9[2] = 3;
console.log(arr9);

console.log("=== ПЕРЕЗАПИСЬ ЭЛЕМЕНТОВ МАССИВА В JAVASCRIPT ===");

// №1 - Прибавление числа 3 к каждому элементу массива
let arr10 = [1, 2, 3];
arr10[0] += 3;
arr10[1] += 3;
arr10[2] += 3;
console.log(arr10);

console.log("=== ИНКРЕМЕНТ И ДЕКРЕМЕНТ ЭЛЕМЕНТОВ МАССИВА В JAVASCRIPT ===");

// №1 - Увеличение каждого элемента массива на единицу
let arr11 = [1, 2, 3];
arr11[0]++;
arr11[1]++;
arr11[2]++;
console.log(arr11);

console.log("=== ДОБАВЛЕНИЕ ЭЛЕМЕНТОВ ПО КЛЮЧАМ JAVASCRIPT ===");

// №1 - Создание массива [1, 2, 3] через присваивание по ключам
let arr12 = [];
arr12[0] = 1;
arr12[1] = 2;
arr12[2] = 3;
console.log(arr12);

// №2 - Добавление элементов 4 и 5 в конец массива [1, 2, 3]
let arr13 = [1, 2, 3];
arr13[3] = 4;
arr13[4] = 5;
console.log(arr13);

console.log("=== РАЗРЕЖЕННЫЕ МАССИВЫ В JAVASCRIPT ===");

// №1 - Длина разреженного массива
let arr14 = [];
arr14[3] = 'a';
arr14[8] = 'b';
console.log(arr14.length);

console.log("=== ДОБАВЛЕНИЕ ЭЛЕМЕНТОВ ЧЕРЕШ PUSH В JAVASCRIPT ===");

// №1 - Заполнение массива числами 1, 2, 3 через push
let arr15 = [];
arr15.push(1);
arr15.push(2);
arr15.push(3);
console.log(arr15);

// №2 - Добавление элементов 4 и 5 в конец массива [1, 2, 3] через push
let arr16 = [1, 2, 3];
arr16.push(4);
arr16.push(5);
console.log(arr16);

console.log("=== КЛЮЧИ МАССИВОВ ИЗ ПЕРЕМЕННЫХ В JAVASCRIPT ===");

// №1 - Вывод элемента массива по ключу из переменной
let arr17 = ['a', 'b', 'c'];
let key = 2;
console.log(arr17[key]);

// №2 - Сумма элементов массива по ключам из переменных
let arr18 = [1, 2, 3, 4, 5];
let key1 = 1;
let key2 = 2;
console.log(arr18[key1] + arr18[key2]);

console.log("=== ОПЕРАТОР DELETE В МАССИВАХ В JAVASCRIPT ===");

// №1 - Удаление элементов массива и проверка длины
let arr19 = ['a', 'b', 'c', 'd', 'e'];
delete arr19[1];
delete arr19[3];
console.log(arr19.length);

console.log("=== ПОИСК ОШИБОК В КОДЕ С МАССИВАМИ JAVASCRIPT ===");

// №1 - Исправление кода для вывода последнего элемента
let arr20 = [1, 2, 3, 4, 5];
console.log(arr20[arr20.length - 1]); // Было: arr(arr.length)

// №2 - Исправление кода для нахождения суммы элементов
let arr21 = [1, 2, 3, 4, 5];
console.log(arr21[0] + arr21[1] + arr21[2] + arr21[3] + arr21[4]); // Было: индексы с 1 до 5

// №3 - Исправление кода для вывода длины массива
let arr22 = [1, 2, 3, 4, 5];
console.log(arr22.length); // Было: arr.length()

// №4 - Исправление кода для вывода длины массива
let arr23 = [1, 2, 3, 4, 5];
console.log(arr23.length); // Этот код уже правильный
