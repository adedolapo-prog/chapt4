Differentiate between function arguments and parameter
===

A function parameter is a container used to store the values to be used in a function. They are, simply put, variables that would be assigned values later on in the function. On the other hand, the values assigned to these parameters are called functions. They are the actual data that are assigned to a variable in a function.

	For example: we have ==>
	function newAge(dogAge) {
		console.log(`My dog is ${dogAge} years old.`);
	}

	newAge{4};

In the example given above, dogAge is the parameter as it will hold the values to be assigned to the function later on. The number '4' on line 11 is the argument as this is the actual value given to the function.


Explain Concatenation with Examples
===

Concatenation is a way of joining strings together with the use of the **plus (+)** operator. We can use the plus operator to join two or more strings together to form one string through the method of concatenating. 

For example:
	let statementA = "He is Jon";
	let statementB = "He is five years old";

In order to join these two statements together, we concatenate them using the plus (+) operator as shown below.
	console.log(statementA + " " + statementB);