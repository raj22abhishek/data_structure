class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}
class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    push(val) {
        let newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        ++this.size;
        return 'added'
    }
    pop(){
        if(!this.head) return null;
        let temp = this.tail;
        if(this.size == 1){
            this.head = null;
            this.tail = null;
            
        } else {
            this.tail = temp.prev;
            this.tail.next = null;
        }
        --this.size;
        return this;
    }
}

let dll = new DoublyLinkedList();
console.log(dll);
console.log(dll.push(1))
console.log(dll);
console.log(dll.push(2))
console.log(dll);
console.log(dll.pop())
console.log(dll);
console.log(dll.pop())
console.log(dll);