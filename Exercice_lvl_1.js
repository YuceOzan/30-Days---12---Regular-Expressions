//1. CALCULATE ANNUAL TOTAL ICOME FROM TEXT
const income = "He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.";

const pattern = /\d+/g;

const totalIncome = income.match(pattern);

const totalAnnualIncome = `His Annual income is : ${(totalIncome.map(Number)[0] * 12) + totalIncome.map(Number)[1] + (totalIncome.map(Number)[2] *12)} euros.`;

console.log(totalAnnualIncome);

//2. EXTRACT NUMBERS AND FIND THE DISTANCE BETWEEN THE TWO FURTHEST

const points = ['-1', '2', '-4', '-3', '-1', '0', '4', '8'];

const pattern1 = /-?\d+/g;

const sortedPoints = points
  .join(' ')
  .match(pattern1)
  .map(point => parseInt(point))
  .sort((a, b) => a - b); 

console.log(sortedPoints);

const distance = sortedPoints[sortedPoints.length -1] - sortedPoints[0];
console.log(distance);

//3. WRITE A PATTERN WHICH IDENTIFY IF A STRING IS A VALID JAVASCRIPT VARIABLE

function is_valid_variable(variableName) {
    const pattern = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/;
    return pattern.test(variableName);
  }

  console.log(is_valid_variable("firstName")); //True
  console.log(is_valid_variable("first-Name")); //False

  