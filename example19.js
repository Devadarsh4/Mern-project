const persons = [{
        name: "Tommy",
        age: 2,
    },
    {
        name: "star",
        age: 5,
    },
]


const names = persons.map((p, i) => { // map gave as array only single set value of an array
    return i + " ." + p.age;
}).forEach(n => console.log(n));
console.log(names.toString());