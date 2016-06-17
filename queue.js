/**
 * Created by Dunna on 3/31/2016.
 */
function Queue(){
    this.queue = {};
    this.old = 1;
    this.new =1;
}

Queue.prototype.push = function(val){
    this.queue[this.new] = val;
    this.new++;
    console.log(this.queue);
}
Queue.prototype.pop = function(){
    delete this.queue[this.old];
    this.old++;
    console.log(this.queue);
}
var queue = new Queue();
queue.push(9);
queue.push(7);
queue.push(8);
queue.pop();
queue.pop();
