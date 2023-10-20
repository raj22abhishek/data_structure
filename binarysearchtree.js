class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BST{
    constructor() {
        this.root = null;
    }
    insert(value) {
        let newNode = new Node(value);
        if(!this.root) {
            this.root = newNode;
            return this.root;
        }
        let rootVal = this.root;
        while(true) {
            if(rootVal.value > value){
                if(!rootVal.left) {
                    rootVal.left = newNode;
                    return this;
                }
                else rootVal = rootVal.left
            } else {
                if(!rootVal.right) {
                    rootVal.right = newNode;
                    return this;
                }
                else rootVal = rootVal.right;
            }
        }
    }
    search(value) {
        let current = this.root;
        while(true) {
            console.log("-------",current?.value)
            if(!current) return false;
            if(value == current.value) return true;
            else if(value < current.value) current = current.left;
            else if(value > current.value) current = current.right;
        }
    }
}
let bst = new BST();
console.log(bst.insert(41));
console.log(bst.insert(20));
console.log(bst.insert(65));
console.log(bst.insert(11));
console.log(bst.insert(29));
console.log(bst.insert(50));    
console.log(bst.insert(91));
console.log(bst.insert(12));
console.log(bst.insert(32));
console.log(bst.insert(72));
console.log(bst.insert(99));
console.log(bst.search(104));
