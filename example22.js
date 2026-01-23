const person = {
    name: 'John',
    age: 87,
    gender: 'M'
};
console.log(person);
let name = {...person, age: 23 };
console.log(name);