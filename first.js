/* ------Первое задание------

let a = 1;
if (true) {
var b = 2;
}
console.log (a + b) // Ответ 3 

----------

console.log (a); // Ответ undefined
 if (true) {
    var a = 5;
 }
 console.log (a) // Ответ 5

 

------Второе задание------

 var str1 = 'Привет';
 var str2 = 'Илья';
 console.log (str1 + ', ' + str2)

 

 let a = 1;
 console.log (`Значение переменной а - ${a}`);

------------
 
 let num1 = 10;
 let num2 = 5;
 console.log (num1 + num2);
 console.log (num1 - num2);
 console.log (num1 * num2);
 console.log (num1 / num2);
 
-------------

 let a = 5;
 if (true) {
    a = 10;
 }
 function foo () {
    console.log (a); // Ответ 10
 }

 foo ()

-----Третье задание-----
if (true) {
	var a;
}

function foo() {
	console.log(a); // undefined
}

foo()

a = 10;

---------
 */
function foo() {
	var a = 10;
}

if (true) {
	var b = 10;
}


console.log(a); // Reference Error
console.log(b); // при наличии ошибки при первом выводе, вывод переменной b мы не увидим,но если не учитывать переменную a , то b выведет 10
