class Hash {
    constructor(size = 5) {
        this.keymap = new Array(size);
    }
    _hash(key, len) {
        let total = 0;
        let weird_prime = 31; //helps in reducing collision
        for(let i = 0; i< Math.min(key.length, 100); i++ ){
            let value = key[i].charCodeAt(0) - 96;
            total = (total + weird_prime + value) % this.keymap.length;
        }
        return total;
    }
    set(key, value) {
        let index = this._hash(key);
        if(!this.keymap[index]) this.keymap[index] = [];
        this.keymap[index].push([key, value]);
    }
    get(key) {
        let index = this._hash(key);
        if(!this.keymap[index]) return undefined;
        for(let i = 0; i< this.keymap[index].length; i++) {
            if(this.keymap[index][i][0] == key) return this.keymap[index][i][1];
        }
    }
    allValues() {
        let valueArr = [];
        for(let i = 0; i< this.keymap.length; i++ ){
            if(this.keymap[i])
            for(let j= 0; j< this.keymap[i].length; j++ ){
                if(!valueArr.includes(this.keymap[i][j][1])){
                    valueArr.push(this.keymap[i][j][1]);
                }
            }
            
        }
        return valueArr;
    }
    allKeys() {
        let keyArr = [];
        for(let i = 0; i< this.keymap.length; i++ ){
            if(this.keymap[i])
            for(let j= 0; j< this.keymap[i].length; j++ ){
                if(!keyArr.includes(this.keymap[i][j][0])){
                    keyArr.push(this.keymap[i][j][0]);
                }
            }
            
        }
        return keyArr;
    }
}

let hash = new Hash();
console.log(hash.set("purple","goodbye"))
console.log(hash.set("blue","hello"))
console.log(hash.set("pink","good going"))
console.log(hash.set("yellow","love"))
console.log(hash.set("pink","hello"))
console.log(hash.keymap, hash.keymap.length);
console.log(hash.get("yellow"))
console.log(hash.allValues())
console.log(hash.allKeys())