//sample 1
function decrementCounter(number) {
    if (number === 0) return;
    console.log(number);
    decrementCounter(number - 1);
}
decrementCounter(6);
decrementCounter(2);

// sample 2
function checkNumber(number) {
    if (number === 0) return (number + " is even");
    if (number === 1) return (number + " is odd");
    return checkNumber(number - 2);
}
console.log(checkNumber(5));
console.log(checkNumber(10));
console.log(checkNumber(659));

//sample 3
function factorial(n) {
    if (n === 0)
        return 1;
    else
        return n * factorial (n-1);
}
let num = 6;
let result = factorial(num);
console.log(result)
// حالت دیگر
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));