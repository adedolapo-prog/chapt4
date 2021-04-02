// const greetings = (name) => {
// 	console.log(`hello ${name}, you are awesome.`);
// };

// greetings('Shegs');

// const gettingNames = (firstName, lastName, functionStatement) => {
// 	let fullName = `${firstName} ${lastName}`;
// 	return functionStatement(fullName);
// };

// console.log(gettingNames('Adedolapo', 'Inventar', greetings));


// const ageLimit = (birthYear, currentYear, name) => {
// 	let age = currentYear - birthYear;
// 	return `${name} is ${age} years old. `;
// };

// console.log(ageLimit(1994, 2021, 'Adedolapo'));

// const arithmeticFunction = (firstParam, secondParam, operator) => {
// 	if (operator == 'multiply') {
// 		return firstParam * secondParam;
// 	} else if (operator == 'divide') {
// 		return firstParam / secondParam;
// 	} else if (operator == 'sum') {
// 		return firstParam + secondParam;
// 	}
// };

// console.log(arithmeticFunction(12, 3, 'multiply'));
// console.log(arithmeticFunction(66, 2, 'divide'));
// console.log(arithmeticFunction(12, 15, 'sum'));


//higher order function
/*
const fuelCost = (cost, name) => {
	console.log(`hey ${name}, you have spent ${cost} so far.`)
};
const fuelcalculation = (firstName, lastName, fuelAmount, distanceCovered, meter) => {
	const cost = fuelAmount * distanceCovered;
	const fullName = `${firstName} ${lastName}`;
		return meter(cost, fullName); //this is the called back function
};

console.log(fuelcalculation('Ade', 'Ogo', 12, 2000, fuelCost));
console.log(fuelcalculation('Shayne', 'Inventar', 6, 2354, fuelCost));
*/

//trying out promises here
// let newPromise = new Promise((resolve, reject) => {
// 	let maths = 2 + 1;
// 	if (maths == 2) {
// 		resolve('success');
// 	} else {
// 		reject('error');
// 	};
// });

// newPromise.then((message) => {
// 	console.log(`this is in then ${message}`);
// }).catch((message) => {
// 	console.log(`this is in the catch ${message}`);
// })

// let allGood = false;

// let fetchData = new Promise((resolve, reject) =>{
// 	if (allGood == true) {
// 		resolve({
// 			id: 1,
// 			message: 'success'
// 		});
// 	} else {
// 		reject('error fetching data');
// 	}
// })

// fetchData.then(fetchedData => {
// 	console.log('then: ', fetchedData.message);
// }).catch(error => {
// 	console.log('catch: ', error)
// })

// const dataQuantity = 40;

// let expectedData = new Promise((resolve, reject) => {
// 	if (dataQuantity <= 30) {
// 		resolve('success');
// 	} else {
// 		reject('error');
// 	}
// });

// expectedData.then((data) => {
// 	console.log(`resolve: ${data}`);
// }).catch((error) => {
// 	console.error(`error: ${error}`);
// });

let name = prompt('what is your name?')

const getData = new Promise((resolve, reject) => {
	if (typeof name == 'string' ) { //checks if input is a string
		resolve('it is a string');
	} else {
		reject('error. not a valid input');
	}
});

getData.then((data) => {
	console.log(`user input: ${data}`);
}).catch((error) => {
	console.log(`user input: ${error}`);
});

