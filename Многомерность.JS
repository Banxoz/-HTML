"use strict";

let obj3 = {
  1: {
    1: 11,
    2: 12,
    3: 13,
  },
  2: {
    1: 21,
    2: 22,
    3: 23,
  },
  3: {
    1: 24,
    2: 25,
    3: 26,
  },
};
let sum8 = 0;
for (let key in obj3) {
  for (let subKey in obj3[key]) {
    sum8 += obj3[key][subKey];
  }
}
console.log("Сумма элементов объекта:", sum8);
console.log("-------------");

let students = {
  'group1': ['name11', 'name12', 'name13'],
  'group2': ['name21', 'name22', 'name23'],
  'group3': ['name31', 'name32', 'name33'],
};
console.log(students['group3'][0]);
console.log("-------------");

let data1 = {
  1: [
    'data11',
    'data12',
    'data13',
  ],
  2: [
    'data21',
    'data22',
    'data23',
  ],
  3: [
    'data31',
    'data32',
    'data33',
  ],
  4: [
    'data41',
    'data42',
    'data43',
  ],
};
for (let key in data1) {
  for (let elem of data1[key]) {
    console.log(elem);
  }
}
console.log("-------------");

let data2 = [
  {
    1: 'data11',
    2: 'data12',
    3: 'data13',
  },
  {
    1: 'data21',
    2: 'data22',
    3: 'data33',
  },
  {
    1: 'data31',
    2: 'data32',
    3: 'data33',
  },
];
for (let obj of data2) {
  for (let key in obj) {
    console.log(obj[key]);
  }
}
console.log("-------------");


let employees1 = [
  {
    name: 'name1',
    salary: 500,
  },
  {
    name: 'name2',
    salary: 400,
  },
  {
    name: 'name3',
    salary: 500,
  },
];
for (let employee of employees1) {
  console.log(employee.name + ' - ' + employee.salary);
}
console.log("-------------");

let employees2 = [
  {
    name: 'name1',
    salary: 500,
  },
  {
    name: 'name2',
    salary: 400,
  },
  {
    name: 'name3',
    salary: 500,
  },
];
let totalSalary = 0;
for (let employee of employees2) {
  totalSalary += employee.salary;
}
console.log("Сумма зарплат всех работников:", totalSalary);
console.log("-------------");

let employees3 = [
  {
    name: 'name1',
    salary: 300,
    age: 28,
  },
  {
    name: 'name2',
    salary: 400,
    age: 29,
  },
  {
    name: 'name3',
    salary: 500,
    age: 30,
  },
];
employees3.push({
  name: 'name4',
  salary: 600,
  age: 31,
});
console.log(employees3);
console.log("-------------");
