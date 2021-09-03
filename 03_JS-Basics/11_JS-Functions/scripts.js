/*************
 * Functions *
 *************/

function calculateAge(birthYear){
    return 2021 - birthYear;
}

var ageJohn = calculateAge(1999);
var ageRuhul = calculateAge(1995);
var ageAmin = calculateAge(1991);
var ageParvez = calculateAge(1979);
var ageOmi = calculateAge(2009);

console.log('John\'s age: ',ageJohn);
console.log('Ruhul\'s age: ',ageRuhul);
console.log('Amin\'s age: ',ageAmin);
console.log('Parvez\'s age: ',ageParvez);
console.log('Omi\'s age: ',ageOmi);


function yearsUntilRetirement(year, firstname){
    var age = calculateAge(year);
    var retirement = 65 - age;

    if(retirement>0){
        console.log(firstname+" retirement years left, "+retirement+" year.");
    }else{
        console.log(firstname+" already retired, "+retirement+"  year ago.");
    }
}

yearsUntilRetirement(1998, "Nafiza");
yearsUntilRetirement(1951, "Chowdhury");
yearsUntilRetirement(2008, "Omi");