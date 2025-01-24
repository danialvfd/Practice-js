var submitButton = document.getElementById("submitButton");
var columnBackgroundRed = document.getElementById("columnBackgroundRed").style.backgroundColor = "red";

submitButton.addEventListener("click", ShowMessage);

function ShowMessage() {
  alert("درخواست شما ثبت شد");
}

  $(document).ready(function () {
    $("th, td").click(function () {
      $(this).hide();
    });
  });

$("p").dblclick(function () {
  $(this).hide();
});

$("#p1").mouseenter(function () {
  alert("You entered the <p>");
});

function onchangeFunc() {
    console.log( "hi" )
}

let grade = document.getElementById("grade")
function onchangeGrade(){
  console.log(grade.value)
}

var age = 10;
var gender = 'male';

if (age > 5 && gender == 'male') {
  console.log("welcome")
}


if (age > 18 || gender == 'male') {
  console.log("you are not welcome here!")
}


if (age > 5) {
  console.log(age + " > 5")  // + (concatenate)
}


if (age > 11) {
  console.log("+11")
}
else {
  console.log("-11")
}


if (age % 2 == 0) {
  console.log("zoj")
}
else {
  console.log("fard")
}


if (gender == 'male') {
  if (age > 9) {
    console.log("male +9")
  }
  else {
    console.log("male -9")
  }
}
else {
  if (age > 9) {
    console.log("female +9")
  }
  else {
    console.log("female -9")
  }
}

class student {
  constructor (name, age) {
    this.name = name; // hatman niazi nist ham esm bashand
    this.age = age;
  }
  birthYear(){
    let date = new Date();
    let year = date.getFullYear();
    let result = year - this.age;
    console.log(this.name + ": " + result);
  }
}

let student1 = new student ("Ali", 17);
student1.birthYear();

try {
  let temp = null;
  temp.birthYear();
  console.log("Done!");
} catch (error) {
  console.log("Error!"); // ignored
}
