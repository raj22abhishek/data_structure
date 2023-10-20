class MaxBinaryHeap {
    constructor() {
        this.value = [];
        this.size = 0;
    }
    insert(val) {
        this.value.push(val);
        this.bubbleup();
        this.size++;
        return this.value;
    }
    bubbleup(){
        let curr = this.size;
        if(this.size == 0) return;
        let parent = Math.floor((curr-1)/2);
        while(curr > 0){
            console.log(curr,parent,this.value[curr],this.value[parent]);
            let checkval = this.value[parent];
            if(checkval < this.value[curr]) {
                let temp = this.value[curr];
                this.value[curr] = checkval;
                this.value[parent] = temp;
                curr = parent;
            } else curr = -1;
        }
    }
    remove() {
        if(this.value.length == 0) return;
        if(this.value.length == 1) {
            this.value.pop();
            return [];
        }
        let lastVal = this.value[this.value.length -1];
        this.value[0] = lastVal;
        this.value.pop();
        this.bubbledown();
        return this.value;
    }
    bubbledown() {
        let curr = 0;
        let leftChild = curr * 2 + 1;
        let rightChild = curr * 2 + 2;
        if(this.value.length == 2 && this.value[0] < this.value[1]) {
            let temp = this.value[1];
            this.value[1] = this.value[0];
            this.value[0] = temp;
            return;
        }
        console.log(leftChild, rightChild)
        while(leftChild < this.value.length && rightChild < this.value.length) {
            if(this.value[leftChild] > this.value[rightChild]) {
                let leftVal = this.value[leftChild];
                this.value[leftChild] = this.value[curr];
                this.value[curr] = leftVal;
                curr = leftChild;
                leftChild = curr * 2 + 1;
                rightChild = curr * 2 + 2;
            } else {
                let rightVal = this.value[rightChild];
                this.value[rightChild] = this.value[curr];
                this.value[curr] = rightVal;
                curr = rightChild;
                leftChild = curr * 2 + 1;
                rightChild = curr * 2 + 2;
            }
        }
    }
}

let maxBinaryHeap = new MaxBinaryHeap()
console.log(maxBinaryHeap.insert(55))
console.log(maxBinaryHeap.insert(39))
console.log(maxBinaryHeap.insert(41))
console.log(maxBinaryHeap.insert(18))
console.log(maxBinaryHeap.insert(27))
console.log(maxBinaryHeap.insert(12))
console.log(maxBinaryHeap.insert(33))
// console.log(maxBinaryHeap.insert(1))
// console.log(maxBinaryHeap.insert(17))
console.log(maxBinaryHeap.remove())
console.log(maxBinaryHeap.remove())
console.log(maxBinaryHeap.remove())
console.log(maxBinaryHeap.remove())
console.log(maxBinaryHeap.remove())
console.log(maxBinaryHeap.remove())
console.log(maxBinaryHeap.remove())