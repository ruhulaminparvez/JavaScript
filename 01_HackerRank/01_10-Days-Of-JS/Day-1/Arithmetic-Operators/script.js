var length;
var width;

function getArea(length, width){
    
    ans = length*width;
    return ans;
}

console.log(`The Area of a Rectangle: ${getArea(3, 4.5)}`);

function getPerimeter(length, width){
    
    ans = 2*(length+width);
    return ans;
}

console.log(`The Perimeter of a Rectangle: ${getPerimeter(3, 4.5)}`);