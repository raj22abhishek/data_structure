class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(val) {
        var newNode = new Node(val);
        if(!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }
    dequeue(){
        if(!this.first) return null;
        var temp = this.first;
        if(this.first == this.last){
            this.last = null;
        }
        this.first = this.first.next;
        return temp.value;
    }
}
let queue = new Queue();
console.log(queue.enqueue(1));
console.log(queue.enqueue(11));
console.log(queue.enqueue(111));
console.log(queue.enqueue(1111));
console.log(queue.enqueue(11111));
console.log(queue.enqueue(111111));
console.log(queue);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
