/********************
 * Coding Challenge *
 ********************/

var johnScoreOne, johnScoreTwo, johnScoreThree, johnAvg, mikeScoreOne, mikeScoreTwo, mikeScoreThree, mikeAvg, marryScoreOne, marryScoreTwo, marryScoreThree, marryAvg;

johnScoreOne = 113;
johnScoreTwo = 120;
johnScoreThree = 103;

johnAvg = (johnScoreOne+johnScoreTwo+johnScoreThree)/3;
console.log('John\'s Team Average Score: '+johnAvg);

mikeScoreOne = 116;
mikeScoreTwo = 94;
mikeScoreThree = 123;

mikeAvg = (mikeScoreOne+mikeScoreTwo+mikeScoreThree)/3;
console.log('Mike\'s Team Average Score: '+mikeAvg);

marryScoreOne = 97;
marryScoreTwo = 134;
marryScoreThree = 105;

marryAvg = (marryScoreOne+marryScoreTwo+marryScoreThree)/3;
console.log('Marry\'s Team Average Score: '+marryAvg);

if (johnAvg > mikeAvg && johnAvg > marryAvg){
    console.log('Hurrah! John\'s Team has Highest Average with ' + johnAvg + ' Points.');
} else if (mikeAvg > johnAvg && mikeAvg > marryAvg){
    console.log("Hurrah! Mike's Team has Highest Avearge with " + johnAvg + " Points.");
} else if (marryAvg > johnAvg && marryAvg > mikeAvg){
    console.log("Hurrah! Marry's Team has Highest Average with " + johnAvg + " Points.");
} else if (johnAvg === mikeAvg || mikeAvg === johnAvg){
    console.log("oh, Draw! Jonh and Mike has Same Average, John Average is: "+johnAvg+" and Mike Average is: "+mikeAvg);
} else if (johnAvg === marryAvg || marryAvg === johnAvg){
    console.log("oh, Draw! Jonh and Marry has Same Average, John Average is: "+johnAvg+" and Marry Average is: "+marryAvg);
} else if (mikeAvg === marryAvg || marryAvg === mikeAvg){
    console.log("oh, Draw! Mike and Marry has Same Average, Mike Average is: "+mikeAvg+" and Marry Average is: "+marryAvg);
} else{
    console.log("Check Again!");
}
