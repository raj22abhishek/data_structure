class QueueNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    push(value) {
        let newNode = new QueueNode(value);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        return this;
    }
    dequeue() {
        if(!this.head) return null;
        else {
            let popVal = this.head;
            this.head = this.head.next;
            return popVal;
        }
    }
}
class binaryRoot {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BST {
    constructor(){
        this.root = null;
    }
    add(value) {
        let newNodeBFS = new binaryRoot(value);
        let curr = this.root;
        while(true) {
            if(!this.root) {
                this.root = newNodeBFS;
                return this;
            } else {
                if(value > curr.value){
                    if(!curr.right) {
                        curr.right = newNodeBFS;
                        return this;
                    } else curr = curr.right;
                } else {
                    if(!curr.left) {
                        curr.left = newNodeBFS;
                        return this;
                    } else curr = curr.left;
                }
            }
        }
    }
}
class BFS {
    constructor() {

    }
    print(bfs) {
        let visited = [];
        let queue = new Queue();
        queue.push(bfs.root);
        while(queue.head) {
            let curr = queue.dequeue().value;
            if(curr.left){
                queue.push(curr.left);
            }
            if(curr.right){
                queue.push(curr.right);
            }
            visited.push(curr.value);
        }
        return visited;
    }
}
class DFSpreorder {
    recursion(node){
        console.log(node.value);
        if(node.left){
            this.recursion(node.left)
        }
        if(node.right) {
            this.recursion(node.right)
        }
    }
}
class DFSpostorder {
    recursion(node){
        if(node.left){
            this.recursion(node.left)
        }
        if(node.right) {
            this.recursion(node.right)
        }
        console.log(node.value);
    }
}
class DFSInOrder {
    recursion(node){
        if(node.left){
            this.recursion(node.left)
        }
        console.log(node.value);
        if(node.right) {
            this.recursion(node.right)
        }
    }
}
let bfss = new BFS();
let bst = new BST();
        bst.add(10);
        bst.add(6);
        bst.add(15);
        bst.add(3);
        bst.add(8);
        bst.add(20);
let dfs = new DFSpreorder();
console.log(bfss.print(bst));
console.log(dfs.recursion(bst.root));


