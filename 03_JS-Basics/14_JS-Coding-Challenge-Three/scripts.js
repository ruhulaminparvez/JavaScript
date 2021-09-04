/**************************
 * Coding Challenge Three *
 **************************/
//Tip Calculator
function tipCalc(bill){
    var percentage;
    if (bill < 50){
        percentage = .2;
    } else if(bill >= 50 && bill < 200){
        percentage = .15;
    }  else {
        percentage = .1;
    }
    return percentage * bill;
}

// var Calc = tipCalc(268);
// console.log(Calc);

var bills = [124, 48, 268];
var tips = [tipCalc(bills[0]), tipCalc(bills[1]), tipCalc(bills[2])];

console.log(bills);
console.log(tips);

var finalAmount = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(finalAmount);
