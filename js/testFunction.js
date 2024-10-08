
function add(x, y) {
    return x + y;
}

function multiply(x, y) {
    return x * y;
}

function applyOperation(func, a, b) {
    const result = func(a, b);
    console.log(result);
}

applyOperation(add, 5, 3);  
applyOperation(multiply, 5, 10);

applyOperation((x, y) => x * y, 5, 10000);
