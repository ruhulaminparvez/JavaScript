/********************
 * 'this' - Keyword *
 ********************/

//console.log(this);

calcAge(1999);

function calcAge(year){
    console.log(2021 - year);
    console.log(this);
}

var ruhul = {
    name: 'ruhul',
    yearOfYear: 1999,
    calcAge: function(){
        console.log(this);
        console.log(2021 - this.yearOfYear);

        /*
        function innerFunction() {
            console.log(this);
        }
        innerFunction();
        */
    }
}

ruhul.calcAge();

var mike = {
    name: 'mike',
    yearOfYear: 1991,

}

mike.calcAge = ruhul.calcAge;
mike.calcAge();
