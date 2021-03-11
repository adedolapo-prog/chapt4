function arithmeticFunction(thirdArg, firstArg, secondArg) {
  //Using the if statement
  if (thirdArg == "multiply") {
  console.log(firstArg * secondArg);
  } else if (thirdArg == "divide") {
  console.log(firstArg / secondArg);
  } else if (thirdArg == "sum") {
  console.log(firstArg + secondArg);
  }
}

//calling each parameter
arithmeticFunction("multiply",2,5,);
arithmeticFunction("sum",12,2);
arithmeticFunction("divide",81,9);