/***************************
 * Scoping and Scope Chain *
 ***************************/

// first scoping example
var a = "Hello!";
first();

function first(){
    var b = 'Hi!';
    second();
    
    function second(){
        var c = 'Hey!';
        console.log(a + b + c);
    }
}


// second scoping example
var d = "Hello!";
first();

function first(){
    var e = 'Hi!';
    second();
    
    function second(){
        var f = 'Hey!';
        third();
    }
}

function third(){
    var g = 'John';
    //console.log(f);
    console.log(d+g);
}