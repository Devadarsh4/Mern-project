function addNum(a, b) {
    if (a && b) {
        return Number(a) + Number(b);
    } else if (a) {
        return a;
    } else if (b) {
        return b;
    } else {
        return -1;
    }
}
let a = 10;
let result = addNum();
console.log(result)