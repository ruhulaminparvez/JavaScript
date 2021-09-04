/***********************
 * Objects and Methods *
 ***********************/
var ruhul = {
    firstName: 'ruhul amin',
    lastName: 'Parvez',
    birthYear: 1999,
    family: ['nafi', 'tafi', 'mafi'],
    isMarried: true,
    job: 'developer',
    calcAge: function(){
        this.age = 2021 - this.birthYear;
    }
};

ruhul.calcAge();
console.log(ruhul);

