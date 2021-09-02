// BMI Calculation

var markMass, markHeight, johnMass, johnHeight;

markMass = 78; //kg
markHeight = 1.69; //meters
var markBMI = markMass / (markHeight * markHeight);
console.log(markBMI);

johnMass = 92; //kg
johnHeight = 1.95; //meters
var johnBMI = johnMass / (johnHeight * johnHeight);
console.log(johnBMI);

BMI = markBMI > johnBMI;
console.log("Is Mark's BMI higher than John's? ", BMI);

