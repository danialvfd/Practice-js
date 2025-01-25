//Write a loop that prints every number divisible by 3 from 1-200:
for (let i=1 ; i<201 ; i++){
    if(i % 3 ===0){
        console.log(i)
    }
};

//How would you check if a number is an integer?
function checkNumber (i){
    if (i % 1 ===0){
        console.log("number is not intg!");
    } else {
        console.log("number is intg");
    }
};
checkNumber(5);
checkNumber(5.2);
checkNumber(7.28);

// What Are the Different Types of Errors in JavaScript?
/* all kind of error in js    
syntax error
runtime error
*/

// Write a function that takes a string as input and returns the string reversed. For example, given the input "hello", the output should be "olleh".
function reverseString(g){
    console.log(g.split("").reverse().join(""));
}

reverseString("hello");

