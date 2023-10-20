console.log("Abhishek")
class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class Stack {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(val) {
        var newNode = new Node(val);
        if(!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            var temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size;
    }
    pop() {
        if(!this.first) return null;
        if(this.first == this.last) {
            this.last == null;
        }
        var temp = this.first;
        this.first = this.first.next;
        return temp.value;
    }
}
var stack = new Stack();
// console.log(stack);
console.log(stack.push("1"));
// console.log(stack);
console.log(stack.push("11"));
// console.log(stack);
console.log(stack.push("111"));
console.log(stack);
console.log(stack.pop())
console.log(stack);
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())