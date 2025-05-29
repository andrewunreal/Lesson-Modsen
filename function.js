// //1

// const obj = {
//     name: 'Object',
//     getName: function() {
//         return this.name;
//     }
// };
// const getName = obj.getName.bind(obj);
// console.log (getName());

// //2
// //call
// const person = {name: 'Alice'};
// function greet (message) {
//     return (`${message}, ${this.name}`);
// }
// console.log (greet.call('Hi', person))

// //apply
// const person = {name: 'Alice'};
// const arrayPerson = [person];
// function greet (...message) {
//     return (`${message.join(' ')}, ${this.name}`);
// }
// console.log (greet.apply(person, ['hi,' , 'my name is']))

// //bind
// const person = {name: 'Alice'};
// function greet (...message) {
//     return (`${message}, ${this.name}`);
// }
// const bindik = greet.bind(person)
// console.log (bindik('Hola'));

// //3
// const sum = (a,b) =>  a + b;

// //4
// const numbers = [1, 2, 3];
// const secSum = numbers.map(n => n * 2); 
// console.log (secSum)

// //5
// const arrString = ['valentin', 'ivan', 'dima', 'zhekich']
// const strelka = arrString.map(n => n.length);
// console.log(strelka)

//6
const arrayOfNumbers = [1, 3, 4, 8, 22, 13, 9];
function findMaxElem (arr) {
    let max = arr[0];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}
return max;
}
console.log(findMaxElem(arrayOfNumbers));