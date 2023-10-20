//stack

class Node {
    constructor(value) {
        this.next = null;
        this.value = value;
    }
}
class SingleLinkedList {
    constructor() {
        this.head = null
        this.last = null
        this.prevLast = null
        this.obj = {}
        this.size = 0;
    }
    push(value){
        let newNode = new Node(value);
        if(this.size == 1) this.prevLast = this.head;
        if(this.size > 1) this.prevLast = this.last;
        if(!this.head) {
            this.head = newNode;
            this.last = newNode;
        }
         else {
            this.last.next = newNode;
            this.last = newNode;
        }
        ++this.size;
        this.obj[this.size] = this.prevLast;
        return "added";
    }
    display() {
        console.log(this.head.value);
        console.log(this.head.next.value);
        console.log(this.head.next.next.value);
        console.log(this.head.next.next.next.value);
        console.log(this.head.next.next.next.next?.value);
    }
    pop(){
        if(!this.head) return null;
        let temp = this.last;
        if(this.head == this.last){
            this.last = null;
            this.head = null;
            this.prevLast = null;
        }
        this.last = this.obj[this.size];
        if(this.last) {
            this.last.next = null;
        }
        this.size--;
        if(this.size == 0) this.obj = {};
        return temp?.value;
    }
}
let s = new SingleLinkedList();
console.log(s.push(1));
console.log(s);
console.log(s.push(2));
console.log(s);
console.log(s.push(3));
console.log(s);
console.log(s.push(4));
console.log(s)
// s.display();
console.log(s.pop());
console.log(s.pop());
console.log(s.pop());
console.log(s.pop());
console.log(s.pop());
console.log(s.pop());
console.log(s)
console.log(s.push(1));
console.log(s);
console.log(s.push(2));
console.log(s);
// console.log(s.pop());
// console.log(s)