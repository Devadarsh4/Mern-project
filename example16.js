const person = [{
        name: "Tony",
        age: 5,
    },
    {
        name: "star",
        age: 3,
    }
];
console.log(person);
// console.log(JSON.stringify(person, null));
const jsonPerson = JSON.stringify(person, null, 2);
console.log(JSON.parse(jsonPerson));
// console.log(person.name);
// console.log(person.age);