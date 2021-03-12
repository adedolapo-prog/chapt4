function arithmeticExpression (firstArg, secondArg, thirdArg) {
	let result;
	if (thirdArg == "multiply") {
		result = firstArg * secondArg;
	} else if (thirdArg == "divide") {
		result = firstArg / secondArg;
	} else if (thirdArg == "sum") {
		result = (firstArg + secondArg);
	}
	return result;
}

console.log(arithmeticExpression(10, 5, "multiply"));
console.log(arithmeticExpression(36, 4, "multiply"));
console.log(arithmeticExpression(34, 12, "sum"));