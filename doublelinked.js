/**
 * Created by Dunna on 4/10/2016.
 */
function Node(data) {
    this.data = data;
    this.next = null;
    this.previos = null;
}
function Linklist(){
    this.length=0;
    this.head = null;
    this.tail = null;
}

Linklist.prototype.add = function(val){
    var node = new Node(val);
    if (this.length) {
        this.tail.next = node;
        node.previos = this.tail;
        this.tail = node;
    }
    else{
        this.head=node;
        this.tail = node;
    }
    this.length++;
    //var current = this.head;
    return node;

}

var list = new Linklist();
//list.add(3);
list.add(4);
list.add(7);
list.add(5);
list.add(6);

console.log(list.head.next);
