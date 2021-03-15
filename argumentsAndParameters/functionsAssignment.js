function tellFortune (numOfKids, nameOfPartner, geographicLocation, jobTitle) {
//This function tells your job title, name of partner, geographical location and number of kids
  let result;
  result = `You will be a ${jobTitle} in ${geographicLocation}. You will be married to ${nameOfPartner} with ${numOfKids} kids.`;
  console.log(result);
}

tellFortune(3, "Oyinkansola", "Canada", "Backend Developer");
tellFortune(2, "Amaka", "USA", "profitable Trader");
tellFortune(3, "Rayne", "Abuja", "FullStack Developer");



function calculateDogAge(puppyAge) {

//This function declares your dog's age in dog years
  let newAge = puppyAge * 7;
  let output = `your doggie is ${newAge} years old in dog years.`;
  console.log(output);
}

calculateDogAge(4);
calculateDogAge(7);
calculateDogAge(2);



function calculateSupply(age, amountPerDay) {

//this function calculates the amount of food per day you will consume till the age of 70
  let calculation = (70 - age) * 365 * amountPerDay;
  console.log(`You will need ${calculation} to last you until the ripe old age of 70.`);
}

calculateSupply( 40 , 3);
calculateSupply( 43 , 5);
