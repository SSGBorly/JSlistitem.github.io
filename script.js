// string, Number, boolean, null, undenfind

const name = 'Swapnil';
const age = 30;
const isCool = true;
const rating = 4.5;


console.log(typeof isCool); 

//concatenation
console.log('My name is ' + name + ' and I am ' + age); 
// template string
const hello = `My name is ${name} and I am ${age}`;

console.log(hello);

const s = 'hello world!, Goku, Vegeta';

console.log(s.split(','));

//Arrays

const number = new Array(1,2,3,4,5)
const names = ['Goku', 'Vegeta', 'Borly'];

names[3]= 'Berus';
names.push('Pan');
names.unshift('Bulam');
names.pop();


console.log(Array.isArray('Gohan'));
console.log(number);
console.log(names);
console.log(names.indexOf('goku'));

const person = {
    firstName : 'Son',
    lastname : 'Goku',
    age : 30,
    hobbies: ['Traning', 'Fighting', 'Making Friends'],
    address: {
        Plant:'Earth',
        Universe: '7',
    }
}

console.log(person.firstName, person.lastname);
console.log(person.hobbies[1]);
console.log(person.address.Plant);

const {firstName, lastname, address : {Plant}} = person;

console.log(Plant);

person.email = 'songoku@gmail.com';
console.log(person);


const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appt',
        isCompleted: false
    },
];

console.log(todos[1].text);

const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

//For Loop
for(let todo of todos) {
    console.log(todo.isCompleted);
}

for(let i=0; i < todos.length; i++){
    console.log(todos[i].text);
}

for(let i = 0; i <= 10; i++) {
    console.log(`For loop Number: ${i}`);
}

//while
let i = 0;
while(i < 10) {
    console.log(`while loop Number: ${i}`);
    i++;
}

// ForEach, Map, Filter 
todos.forEach(function(todo){
    console.log(todo.text);
});

const todotext = todos.map(function(todo){
    return todo.text;
});
console.log(todotext);

const todoCompleted = todos.filter(function(todo){
    return todo.isCompleted === true;
}).map(function(todo){
    return todo.text;
});

console.log(todoCompleted);

//Condition
const x = 6;
const y = 11;

if(x === 10) {
    console.log('x is 10');
} else if(x > 10){
    console.log('x is greater than 10');
} else {
    console.log('x is less then 10'); 
}

if(x > 5 && y > 10) {
    console.log('x is more than 5 or y is more than 10');
}

const a = 9;

const color = a > 10 ? 'red' : 'blue';
console.log(color);

switch(color) {
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default :
        console.log('color is NOT red or blue');
        break;        
}

//Function

function addNums(num1, num2){
    return num1 + num2;
}

console.log(addNums(5,5));

const addNum = (num1, num2) => {
    return num1 + num2;
}

console.log(addNums(5,5));

//oop

//Constructer Function
/* 
Function Person(firstname, lastname , DOB){
    this.firstname = firstname;
    this.lastname = lastname;
    this.DOB = new Date(DOB);
}

Person.prototype.getBirthYear = function () {
    return this.DOB.getFullYear();
}//

Person.prototype.getfullName = function () {
    return `${this.firstname} ${this.lastname}`; 
}
*/

//Class
class Person {
    constructor(firstname, lastname , DOB) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.DOB = new Date(DOB);
    }

    getBirthYear() {
        return this.DOB.getFullYear();
    }

    getfullName() {
        return `${this.firstname} ${this.lastname}`; 
    }
}

//Instantiate Object
const person1 = new Person('Son', 'Goku', '4-16-1973');
const person2 = new Person('King', 'Vegeta', '8-14-1968');

console.log(person2.getfullName());
console.log(person2.getBirthYear());
console.log(person2);

//DOM 
console.log(window);

//Single element Selector
console.log(document.getElementById('my-form'));
console.log(document.querySelector('.container'));
console.log(document.querySelector('h1'));

//Multiple element Selector
console.log(document.querySelectorAll('.item'));
console.log(document.getElementsByClassName('item'));
console.log(document.getElementsByTagName('li'));

const items = document.querySelectorAll('.item');

items.forEach((item) => console.log(item));
