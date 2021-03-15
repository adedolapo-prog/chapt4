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
console.log(name + " " + lastName);

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
console.log("Using this statement, we can see that it is " + newUnmatch);

//ternary operator
figure1 / 3 > figure2 / 4 ? console.log("wonderful") : console.log("too bad!!");

//using arrays and their properties
const pens = ["blue", "green", "red", "orange"];
console.log("The Array includes: " + pens + ". " + "Array length: ", pens.length);

console.log("To reverse this array, we use ", pens.reverse()); //reversing the order of the array

pens.shift(); //this is to remove the first value of the array

pens.unshift("purple", "pink"); //to add elements to the beginning of the array

pens.pop(); //this removes the last element in the array
console.log(pens);
