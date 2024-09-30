class Stack {
    constructor() {
        this.items = [5, 6, 7];
    }

    // اضافه کردن المان
    push(element) {
        this.items.push(element);
    }

    // حذف آخرین المان از استک
    pop() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.items.pop();
    }

    // دیدن آخرین المان بدون حذف
    peek() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.items[this.items.length - 1];
    }

    // چک کردن خالی بودن استک
    isEmpty() {
        return this.items.length === 0;
    }

    // اندازه استک
    size() {
        return this.items.length;
    }

    // خالی کردن استک
    clear() {
        this.items = [];
        return  "Stack is empty";
    }

    getItems() {
        return this.items;
    }

}

let stack = new Stack();
stack.push(8);
stack.push(9);
stack.push(10);
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.size());
// geter va hazv yek baze
stack.getItems().splice(0, 2);

console.log(stack.getItems()); 

console.log(stack.clear()); 
console.log(stack.isEmpty());