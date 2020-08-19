console.log('hello world !!')

//variable
let name='pratham choudhary';
console.log(name)

//object
let person = {
    name:'pratham',
    age:20
};
console.log(person);

person.name = 'aryan';
person['age'] = 19;

console.log(person);

//array
let color = ['red','blue'];
console.log(color);

color[2]='green';
console.log(color);
console.log(color.length);

function greet(name){
    console.log('hello '+ name);
}

//taking user input
greet(window.prompt("Enter your name: "));