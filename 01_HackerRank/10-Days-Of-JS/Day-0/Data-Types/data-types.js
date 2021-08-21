var secondInteger = 12;
var secondDecimal = 4;
var secondString = "is the best place to learn and practice coding!";

function performOperation(secondInteger, secondDecimal, secondString) {
    
    const firstInteger = 4;
    const firstDecimal = 4.0;
    const firstString = 'HackerRank ';

    console.log(parseInt(secondInteger) + parseInt(firstInteger));


    console.log(parseFloat(secondDecimal) + parseFloat(firstDecimal));

    console.log(firstString + secondString);
}

performOperation(secondInteger, secondDecimal, secondString);
