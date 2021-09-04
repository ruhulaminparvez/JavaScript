/***********************
 * Loops and Iteration *
 ***********************/
// for loop
for (var i=0; i <= 10; i += 2){
    console.log(i);
}


var ruhul = ['ruhul', 'amin', 'parvez', 1999, false];

for (var i = 0; i < ruhul.length; i++){
    console.log(ruhul[i]);
}

// while loop
var i = 0;
while( i < ruhul.length){
    console.log(ruhul[i]);
    i++;
}

// continue and break statements
var amin = ['nafi', 'amin', 'parvez', 1998, true, 'sonjoy'];

for(var i = 0; i < amin.length; i++){
    if (typeof amin[i] !== 'string') continue;
    console.log(amin[i])
}

for(var i = 0; i < amin.length; i++){
    if (typeof amin[i] !== 'string') break;
    console.log(amin[i])
}

// looping backwards
for (var i = amin.length - 1; i >= 0; i--){
    console.log(amin[i]);
}