class Queue {
    constructor() {
        this.items = [9, 5, 12];
    }

    // اضافه کردن
    enqueue(element) {
        this.items.push(element);
    }

    // حذف کردن از ابتدا صف
    dequeue() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.items.shift();
    }

    // نمایش جلو ترین عضو در صف (بدون حذف)
    front() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.items[0];
    }

    // چک کردن خالی بودن صف
    isEmpty() {
        return this.items.length === 0;
    }

    // اندازه صف
    size() {
        return this.items.length;
    }

    // پاک کردن تمام المان های صف
    clear() {
        this.items = [];
    }
}

let queue = new Queue();
queue.enqueue(6); 
queue.enqueue(7);
console.log(queue.front()); 
console.log(queue.dequeue());
console.log(queue.dequeue()); 
console.log(queue.size());
