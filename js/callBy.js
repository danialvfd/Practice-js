var a = 5;
var b;
b = a;
a = 3;
console.log(a);
console.log(b);

// call by reference
var c = { greeting: 'Welcome' };
var d;
d = c;
c.greeting = 'not welcome!';
console.log(c);
console.log(d);