const name = ['shiv', 'john', 'cena'];
const name1 = ['harsh', 'ram', 'other'];
const combo = [...name, ...name1];
console.log(combo);
combo.forEach(n => console.log(n));
const [first, second, ...rest] = combo;
console.log(first);
console.log(second);
console.log(rest);

const person = {
    nae: 'Adam',
    age: 49,
    gender: 'M'
};
const { nae, age, gender } = person;
console.log('---');
console.log(nae);
console.log(age);
console.log(gender);
//distructureing concepts;