/**********************
 * Is Else Statements *
 **********************/

var firstName = 'Ruhul';
var civilStatus = 'single';

if (civilStatus === 'married'){
    console.log(firstName + ' is married!');
}else{
    console.log(firstName + ' is not married!');
}

var isMarried = true;
if (isMarried){
    console.log(firstName + ' is married!');
}else{
    console.log(firstName + ' is not married!');
}

// BMI Calculation

var markMass, markHeight, johnMass, johnHeight;

markMass = 78; //kg
markHeight = 1.69; //meters
var markBMI = markMass / (markHeight * markHeight);
console.log("Mark's BMI : " +markBMI);

johnMass = 92; //kg
johnHeight = 1.95; //meters
var johnBMI = johnMass / (johnHeight * johnHeight);
console.log("John's BMI : " +johnBMI);

if(markBMI > johnBMI){
    console.log("Mark's BMI grather than John's BMI");
}else{
    console.log("John's BMI grather than Mark's BMI");
}