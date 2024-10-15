function modifyValue(x) {
    x = 10; // Changing the value of x
    console.log("Inside function:", x); // Outputs: 10
}

let aTemp = 5;
console.log("Before function call:", aTemp); // Outputs: 5
modifyValue(aTemp);
console.log("After function call:", aTemp); // Outputs: 5

///////////////////

function modifyObject(obj) {
    obj.name = "John"; // Modifying the property of obj
}

let person = { name: "Alice" };
console.log("Before function call:", person.name); // Outputs: Alice
modifyObject(person);
console.log("After function call:", person.name); // Outputs: John