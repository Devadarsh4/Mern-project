const persons = [
    [{
            name: "Tommy",
            age: 2,
        },
        {
            name: "star",
            age: 5,
        },
    ],

    [{
            name: "jons",
            age: 2,
        },
        {
            name: "mark",
            age: 5,
        },
    ],
];
// const names =
// persons.map((p, i) => { // map gave as array only single set value of an array
//     return i + " ." + p.age;
// }).forEach(n => console.log(n));
// // console.log(names);
persons.flatMap((arr, i) => { //flatmap merge all array and gave output in one array
    return arr.map(p => p.name);
}).forEach(n => console.log(n));