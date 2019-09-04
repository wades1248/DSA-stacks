class _Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}
class Stack{
    constructor(){
        this.top = null
    }
    push(data){
        if(this.top === null){
            this.top = new _Node(data, null)
            return this.top
        }
        const node = new _Node(data, this.top)
        this.top = node
    }
    pop(){
        const node = this.top
        this.top = node.next
        return node.data
    }
    peek(){
        return this.top.data
    }
    isEmpty(){
        if(this.top === null ){
            return true
        }
        return false
    }
    display(){
        let fullStack = ''
        let node = this.top
        while(node){
            fullStack = fullStack.concat(node.data +' ')
            node = node.next
        }
        return fullStack
    }
    sort() {
        var s2 = new Stack();
      
        while (this.top) {
          var tmp = this.pop();
      
          while (s2.top && s2.top.data > tmp) {
            this.push(s2.pop());
          }
          s2.push(tmp);
        }
      
        console.log('Sorted stack = ', s2);
      }
}
module.exports = Stack