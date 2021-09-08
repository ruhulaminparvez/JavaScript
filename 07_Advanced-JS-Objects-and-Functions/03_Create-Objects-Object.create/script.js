/**********************************
 * Creating Objects Object.create *
 **********************************/

// Object.create
var personProto = {
    calcAge: function() {
        console.log(1999 - this.yearOfBirth);
    }
};

var ruhul = Object.create(personProto);
ruhul.name = 'ruhul';
ruhul.yearOfBirth = 1999;
ruhul.job = 'designer';

var parvez = Object.create(personProto, {
    name: { value: 'parvez'},
    yearOfBirth: { value: 1999},
    job: { value: 'developer'}
});

