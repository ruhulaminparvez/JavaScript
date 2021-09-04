/*************************
 * Coding Challenge Four *
 *************************/

//BMI Calc using Object and Methods

var mark = {
    fullName: 'mark',
    mass: 78,
    height: 1.69,
    calcBMI: function(){
        this.BMI = this.mass / (this.height * this.height);
        return this.BMI;
    }
};

var john = {
    fullName: 'john',
    mass: 91,
    height: 1.42,
    calcBMI: function(){
        this.BMI = this.mass / (this.height * this.height);
        return this.BMI;
    }
};

if (mark.calcBMI() > john.calcBMI()){
    console.log('Mark have highest BMI : '+mark.BMI);
}else if(john.calcBMI() > mark.calcBMI()){
    console.log('John have highest BMI : '+john.BMI);
}else{
    console.log('They have same BMI : '+mark.BMI+ ', '+john.BMI);
}