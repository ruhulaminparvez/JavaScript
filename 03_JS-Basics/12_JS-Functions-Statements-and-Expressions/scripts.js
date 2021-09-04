/****************************************
 * Functions Statements and Expressions *
 ****************************************/

// Function Declaration
//function whatDoYouDo(job, firstName){}

// Function Expression
var whatDoYouDo = function(job, firstName){
    switch(job){
        case 'teacher':
            return firstName + ' teaches kids how to code';
        case 'driver':
            return firstName + ' drives car Sylhet to Dhaka';
        case 'designer':
            return firstName + ' design beautiful websites';
        default:
            return firstName + ' something else';
    }
}

console.log(whatDoYouDo('teacher', 'Omi'));
console.log(whatDoYouDo('driver', 'Nafiza'));
console.log(whatDoYouDo('designer', 'Chowdhury'));
console.log(whatDoYouDo('singer', 'Ruhul'));