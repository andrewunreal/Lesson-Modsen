// //1
// const numbers = [-10, 5, 0, 3, -1, 8, -7];
// const positiveNumbers = numbers.filter ((i) => i > 0);
// console.log (positiveNumbers);

// //2
// const names = ['alice', 'bob', 'charlie', 'david'];
// const upperCaseNames = names.map (str => str.toUpperCase());
// console.log (upperCaseNames);

// //3
// const numbers = [5, 3, 8, 1, 4];
// const newArray = numbers.sort ((a,b) => a - b);
// console.log (newArray);

// //4
// const numbers = [10, 20, 30, 40, 50];
// const array1 = numbers.reduce ((acc, sum) => acc + sum);
// console.log(array1); 

// //5
// const tasks = ['Купить продукты', 'Сделать домашнее задание', 'Позвонить другу'];
// const arr1 = tasks.length;
// console.log(arr1);
// tasks.push ('Убраться в комнате');
// const arr2 = tasks.length;
// console.log(tasks);
// console.log(arr2);

//6
const forbiddenWords = ['spam', 'advertisement', 'scam'];
const message = 'This is a spam message';
const result2 = forbiddenWords.some (word => message.includes (word));
const result = message.includes ('spam');
console.log(result);
console.log(result2);
// delete forbiddenWords [0];
const totalArray = forbiddenWords.splice (0, 1);
console.log (forbiddenWords);