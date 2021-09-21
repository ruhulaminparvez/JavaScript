/*****************************
* Know performance of a task *
*****************************/

const startTime = performance.now();

for (let i = 0; i < 100; i++){
    console.log(i)
}

const endTime = performance.now();

console.log(`loop took ${endTime - startTime} milliseconds to complete`) // 59.599999994039536