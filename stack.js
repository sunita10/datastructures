/**
 * Created by Dunna on 3/31/2016.
 */
function Stack(){
    this.size = 0;
    this.stack = {}
}

Stack.prototype.push = function (val){
    var size = ++this.size;
    this.stack[size] = val;
    console.log(this.stack);
    return this.stack;
}
Stack.prototype.pop = function (){
    var size = this.size;
    delete this.stack[size];
    this.size --;
    console.log(this.stack);
    return this.stack;
}
var stack = new Stack();
stack.push(2);
stack.push(3);
stack.push(4);
stack.pop();
stack.pop();
stack.pop();
stack.pop();