var num = 1;
while (num < 5) {
    console.log(num);
    num++;
}

var serialNumber = 29;
while (serialNumber <= 100) {
    if (serialNumber % 7 == 0) {
        console.log(serialNumber);
    }
    serialNumber++;
}

var sum = 0, i = 100;
while (i <= 500) {
    sum += i;
    i++;
}
console.log('مجموع : ' + sum);

var counter = 5;
do {
    console.log(counter);
    counter--;
}
while (counter >= 1);

var counterTest = 5;
do {
    console.log(counterTest);
    counterTest--;
}
while (counterTest >= 6); // False 