/********************************************
* First Class Functions Returning Functions *
********************************************/

function interviewQuestion(job){
    if (job === 'designer'){
        return function(name){
            console.log(name + ', can you please explain what UX design is?');
        }
    }else if (job === 'teacher'){
        return function(name){
            console.log('What subject do you teach, ' + name + '?');
        }
    }else {
        return function(name){
            console.log("Hello, " + name + '. What do you do?')
        }
    }
}

let teacherQ = interviewQuestion('teacher');
teacherQ('Ruhul');

let designerQ = interviewQuestion('designer');
designerQ('Parvez');

let anonnymousQ = interviewQuestion();
anonnymousQ('Amin');

//Another Method
interviewQuestion('teacher')('Nafiza');
interviewQuestion('designer')('Chowdhury');
interviewQuestion()('Omi');
