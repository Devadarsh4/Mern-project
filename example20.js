function sum(...nums) {
    let sum = 0;
    let i = 0;
    while (i < nums.length) {
        sum += nums[i];
        i++;
    }
    return sum;
}
const r1 = sum(100, 200, 300);
const r2 = sum(10, 20);
console.log(r1);
console.log(r2)