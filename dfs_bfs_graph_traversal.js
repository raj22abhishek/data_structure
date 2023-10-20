class Graph {
    constructor() {
        this.adjustancyList = {}
        this.visited = {}
    }
    addVertix(key){
        if(!this.adjustancyList[key]) this.adjustancyList[key] = []
        this.adjustancyList[key]
    } 
    addEdge(k1, k2){
        if(this.adjustancyList[k1]) this.adjustancyList[k1].push(k2);
        if(this.adjustancyList[k2]) this.adjustancyList[k2].push(k1);
    }
    removeNode(key) {
        this.adjustancyList[key]?.forEach((edge) => {
            this.adjustancyList[edge] = this.adjustancyList[edge].filter(v => {
                if(v != key) return v
            })
        });
        delete this.adjustancyList[key];
        return this;
    }
    depthfirstrecursive(key) {
        let res = "";
        let visited = {};
        const adjustancyList = this.adjustancyList;
        (function dfs(key) {
            console.log(key, visited);
                res += key + "-->";
                visited[key] = true;
                adjustancyList[key].forEach((edge) => {
                    if(!visited[edge]) {
                        return dfs(edge, visited);
                    }
                })
        })(key);
        return res;
    }
    breatheFirstTraversal(key) {
        let visited = {}
        let res = []
        let queue = [key];
        while(queue.length != 0) {
            let pulledData = queue.shift();
            if(!visited[pulledData]){
                res.push(pulledData);
                visited[pulledData] = true;
                queue = [...queue , ...this.adjustancyList[pulledData]]
            }
        }
        return res;
    }
}
let k = new Graph();
k.addVertix("a");
k.addVertix("b");
k.addVertix("c");
k.addVertix("d");
k.addVertix("e");
k.addVertix("f");
k.addEdge("a","b");
k.addEdge("a","c");
k.addEdge("b","d");
k.addEdge("c","e");
k.addEdge("d","e");
k.addEdge("d","f");
k.addEdge("e","f");
console.log(k.adjustancyList);
console.log(k.removeNode(3));
console.log(k.depthfirstrecursive("a"));
console.log(k.breatheFirstTraversal("a"))