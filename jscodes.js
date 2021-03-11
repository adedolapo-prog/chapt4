//declaring variables

const population = 100; //this is a numeric variable
const name = "My name is Adedolapo"; //this is a string
const constantLight = false; //this is a boolean variable
const toDo = null; //this is a null set
const rareFactor; //this is an undefined variable

//to check the data type
console.log(typeof population);
console.log(typeof name);
console.log(typeof constantLight);
console.log(typeof toDo);

//using arithmetic operators
let figure1 = 10;
let figure2 = 23;
const sum = figure1 + figure2;
const multiply = figure1 * figure2;
const divide = figure2 / figure1;

const newfig1 = figure1++; //unary operators
const newfig2 = figure2--;

//using the short hand arithmetic operators +=, -=
figure1 += 12;
figure2 -= 3;
console.log(figure1, figure2);

//using concatenation
const lastName = 'Huey';
console.log(name + lastName);

//using conditional statement
let unmatch;
if (figure1 > figure2) {
	unmatch = true;
} else {
	unmatch = false;
}
console.log("This statement is " + unmatch);

//advanced logical statement
if (figure1 < figure2 || figure2 * newfig1 > figure1 * newfig2) {
	newUnmatch = true;
} else {
	newUnmatch = false;
}
console.log("Using this statement, we can see that it is" + newUnmatch);