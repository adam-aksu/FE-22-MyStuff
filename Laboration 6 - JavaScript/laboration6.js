/*
	The task for this laboratory assignment is to rewrite the
	functions 1-5 to their corresponding 'Arrow functions'.
*/


/*	F U N C T I O N   1 
	= = = = = = = = = = = = = = = = = = = =

const hello = function(){
	console.log('Hello world');
}
*/

//	Solution in Arrow Function, no parameter
//  - - - - - - - - - - - - - - - - - - - - -
let hello = () => console.log("Hello world!");
hello();


/*	F U N C T I O N   2
	= = = = = = = = = = = = = = = = = = = =

const greet_ = function(name) {
	console.log('Hej ' + name + ' hur mår du?');
}
*/

//	Solution in Arrow Function, one parameter
//  - - - - - - - - - - - - - - - - - - - - -
let greet = name => console.log(`Hej ${name} hur mår du?`);
greet("Adam");


/*	F U N C T I O N   3
	= = = = = = = = = = = = = = = = = = = =

const calc = function(numberOne, numberTwo) {
	return numberOne + numberTwo
}
*/

//	Solution in Arrow Function, two parameters
//  - - - - - - - - - - - - - - - - - - - - - -
let calc = (numberOne, numberTwo) => numberOne + numberTwo;
console.log( calc(14, 5) );


/*	F U N C T I O N   4
	= = = = = = = = = = = = = = = = = = = =
const tip = function(sum, percent) {
	let total = sum + sum * percent;
	return total;
}
console.log( tip(200, 0.06) );
*/

//	Solution in Arrow Function, two parameters
//  - - - - - - - - - - - - - - - - - - - - - -
let tip = (sum, percent) => sum*(1 + percent);
console.log( tip(200, 0.06) );
