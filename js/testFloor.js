// parslint

console.log(parseInt("10"));        // 10
console.log(parseInt("10.33"));     // 10
console.log(parseInt("34 45 66"));  // 34
console.log(parseInt("40 years"));   // 40
console.log(parseInt("He was 40"));  // NaN


//  floor
console.log(Math.floor(4.9));   // 4
console.log(Math.floor(4.1));   // 4
console.log(Math.floor(-4.1));  // -5
console.log(Math.floor(-4.9));  // -5
console.log(Math.floor(0));      // 0
console.log(Math.floor(null));   // 0  important **
console.log(Math.floor(NaN));    // NaN

// parseFloat
console.log(parseFloat("3.14"));        // 3.14
console.log(parseFloat(" 100 "));       // 100
console.log(parseFloat("10.89abc"));    // 10.89
console.log(parseFloat("xyz"));          // NaN
console.log(parseFloat("42 years"));     // 42
console.log(parseFloat("3.14some text"));// 3.14

// round
console.log(Math.round(2.49));   // 2
console.log(Math.round(2.5));    // 3
console.log(Math.round(-2.5));   // -2
console.log(Math.round(-2.51));  // -3
console.log(Math.round(0));       // 0
console.log(Math.round(null));    // 0