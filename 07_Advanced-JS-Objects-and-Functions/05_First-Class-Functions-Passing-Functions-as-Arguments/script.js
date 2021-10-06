/*******************************************************
* First Class Functions Passing Functions as Arguments *
*******************************************************/

let years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr ,func){
    let arrRes = [];
    for (var i = 0; i < arr.length; i++)
    {
        arrRes.push(func(arr[i]));
    }
    return arrRes; 
}

function calculationAge(el){
    return 2021 - el;
}

function isFullAge(el){
    return el >= 18;
}

function maxHeartRate(el){
    if (el >= 18 && el <= 81){
        return Math.round(206.9 - (0.67 * el));
    } else {
        return - 1;
    }

    
}

let ages = arrayCalc(years, calculationAge);
let fullAge = arrayCalc(ages, isFullAge);
let rates = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(fullAge);
console.log(rates);