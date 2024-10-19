function modifyValue(x) {
    x = 10; // Changing the value of x
    console.log("Inside function:", x); // Outputs: 10
}

let aTemp = 5;
console.log("Before function call:", aTemp); // Outputs: 5
modifyValue(aTemp);
console.log("After function call:", aTemp); // Outputs: 5

///////////////////  object

function modifyObject(obj) {
    obj.name = "John"; // Modifying the property of obj
}

let person = { name: "Alice" };
console.log("Before function call:", person.name); // Outputs: Alice
modifyObject(person);
console.log("After function call:", person.name); // Outputs: John

/////////////////// array  call by refrence

function modifyArray(temps) {
    temps[3] = -45;
}

var nums = [1, 2, 5, -3, 0, 50];
console.log("Before function call:", nums ); // Outputs: Alice
modifyArray(nums);
console.log("After function call:", nums); // Outputs: John

/////////////////// string call by value (primitive)

function modifyString(temps) {
     temps = temps.substring(0, 4) + 'z' + temps.substring(5);
}

let stringsTemp = "abcdefg"; 
console.log("Before function call:", stringsTemp ); // Outputs: Alice
modifyString(stringsTemp);
console.log("After function call:", stringsTemp); // Outputs: John