class weightedGraph {
    constructor() {
        this.adjesantList = {};
        this.vertex = []
    }
    addVertix(key) {
        if(!this.adjesantList[key]) this.adjesantList[key] = []
    }
    addEdge(vertex1, vertex2, dist) {
            this.adjesantList[vertex1].push({node: vertex2, dist: dist})
            this.adjesantList[vertex2].push({node: vertex1, dist: dist})
    }
    // getSortestData(start, end){ // myown
    //     let visited = {};
    //     let finalValue = {};
    //     let prevNode = {};
    //     let lowestNode = 0;
    //     let count = 0;
    //     Object.keys(this.adjesantList).forEach((node) => {
    //         count++;
    //         prevNode[node] = null;
    //         if(node == start){
    //             finalValue[node] = 0
    //         }
    //         if(node != start) finalValue[node] = 1000000;
    //     })
    //     while(count > 0) {
    //         let priority = -1;
    //         let val = '';
    //         console.log('finalValue',finalValue,visited);
    //         Object.keys(finalValue).forEach((node) => {
    //             // console.log(node);
    //             if(!visited[node]) {
    //                 if(priority == -1) priority = finalValue[node];
    //                 if(finalValue[node] <= priority) {
    //                     val = node;
    //                     priority = finalValue[node];
    //                 }
    //             }
    //         })
    //         console.log('priority',priority, val);
    //         if(!visited[val]) visited[val] = true;
    //         let lowestDataSet = this.adjesantList[val];
    //         console.log('lowestDataSet', lowestDataSet)
    //         lowestDataSet.forEach((edge) => {
    //             if(!visited[edge.node]) {
    //                 if(finalValue[edge.node] == 1000000) {
    //                     finalValue[edge.node] = edge.dist + priority
    //                 } else {
    //                     console.log(edge.node,finalValue[edge.node],(priority + edge.dist),finalValue)
    //                     if(finalValue[edge.node] > (priority + edge.dist)) {
    //                         finalValue[edge.node] = edge.dist + priority
    //                     }
    //                 }
    //             }
    //         })
    //         count--;
    //         // console.log(priority,lowestDataSet,visited);
    //     }
    //     console.log(finalValue);
    //     console.log(prevNode);
    // }
    getSortestData(start, end){
        let visited = {};
        let finalValue = {};
        let prevNode = {};
        const nodes = new PriorityQueue();
        Object.keys(this.adjesantList).forEach((node) => {
            prevNode[node] = null;
            if(node == start){
                finalValue[node] = 0
                nodes.enqueue(node,0);
            }
            if(node != start) {
                finalValue[node] = 1000000;
                nodes.enqueue(node,1000000);
            }
            prevNode[node] = null
        })
        console.log(finalValue);
        console.log(prevNode);
        console.log(nodes);
        while(nodes.value.length) {
            let smallest = nodes.dequeue();
            let smallestkey = smallest.val;
            let smallestVal = smallest.priority;
            console.log(smallestkey);
            console.log('finalValue',finalValue,visited);
            console.log('nodes', nodes)
            if(!visited[smallestkey]) visited[smallestkey] = true;
            this.adjesantList[smallestkey].forEach((edge) => {
                if(!visited[edge.node]) {
                    if(finalValue[edge.node] == 1000000) {
                        finalValue[edge.node] = edge.dist + smallestVal
                    } else {
                        if(finalValue[edge.node] > (smallestVal + edge.dist)) {
                            finalValue[edge.node] = edge.dist + smallestVal
                        }
                    }
                    nodes.enqueue(edge.node,(edge.dist + smallestVal));
                }
            })
        }
        console.log(finalValue);
        console.log(prevNode);
        console.log(nodes)
    }
}
class PriorityQueue {
    constructor() {
        this.value = []
    }
    enqueue(val, priority) {
        this.value.push({val, priority})
        this.sort();
    }
    dequeue(){
        return this.value.shift()
    }
    sort() {
        this.value.sort((a,b) => a.priority - b.priority)
    }
}
let k = new weightedGraph();
k.addVertix("a");
k.addVertix("b");
k.addVertix("c");
k.addVertix("d");
k.addVertix("e");
k.addVertix("f");
k.addEdge("a","b",4);
k.addEdge("a","c",2);
k.addEdge("b","e",3);
k.addEdge("c","d",2);
k.addEdge("c","f",4);
k.addEdge("d","f",1);
k.addEdge("e","f",1);
k.addEdge("d","e",3);
console.log(k.getSortestData('a', 'e'));