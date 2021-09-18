// Object Pair Value(Todos)
const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    
    },
    {
        id: 2,
        text: 'Meeitng with boss',
        isCompleted: true
    
    },
    {
        id: 3,
        text: 'Dentist Appoinment',
        isCompleted: false
    
    }
];

console.log(todos);
console.log(todos[1].text);

for(let i=0; i < todos.length; i++){
    console.log(todos[i].text);
}