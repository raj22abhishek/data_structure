class Node {
    constructor(value) {
        this.next = null;
        this.prev = null;
        this.value = value;
    }
}

class Cache {
    constructor(size, strategy) {
        this.maxSize = size;
        this.currsize = 0;
        this.hasMap = {};
        this.strategy = strategy;
        this.head = null;
        this.tail = null;
    }
    push(val) {
        let newNode = new Node(val);
        if(this.currsize == 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            if(this.currsize == this.maxSize) {
                this.delete();
            }
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.hasMap[val] = this.tail;
        this.currsize++;
        return this;
    }
    delete(){
        if(this.strategy == "LRU") {
            this.unshift();
        }
    }
    unshift() {
        let temp = this.head;
        if(this.currsize == 0) return null;
        if(this.currsize == 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
            return this;
        }
        --this.currsize;
        delete this.hasMap[temp.value];
    }
    get(key){
        if(!this.hasMap[key]) return null;
        let data = this.hasMap[key];
        if(data.prev == this.head) this.head.next = data.next;
        if(data.next == this.tail) this.tail.prev = data.prev;
        if(data.prev) this.hasMap[data.prev.value].next = data.next;
        else this.head = data.next;
        if(data.next) this.hasMap[data.next.value].prev = data.prev;
        else this.tail = data.prev;
        --this.currsize;
        this.push(data.value);
        return this;
    }
}
let ex = new Cache(5,'LRU');
console.log(ex.push(1));
console.log(ex.push(2));
console.log(ex.push(3));
console.log(ex.push(4));
console.log(ex.push(5));
console.log(ex.get(3));
console.log(ex.get(1));
