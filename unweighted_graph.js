class Graph {
    constructor() {
        this.adjustancyList = {}
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
}
let k = new Graph();
k.addVertix(0);
k.addVertix(1);
k.addVertix(2);
k.addVertix(3);
k.addEdge(0,1);
// k.addEdge(0,3);
// k.addEdge(1,0);
k.addEdge(1,2);
// k.addEdge(2, 1);
k.addEdge(2, 3);
k.addEdge(3, 0);
// k.addEdge(3, 2);
console.log(k.adjustancyList);
console.log(k.removeNode(3));