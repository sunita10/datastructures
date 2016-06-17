function Node(data) {
    this.data = data;
    this.next = null;
}
function Linklist(){
    this.length=0;
    this.head = null;
}

Linklist.prototype.add = function(val){
    var node = new Node(val),
        current = this.head;
    if (!current) {
        this.head = node;
        this.length++;
        return node;
    }
    //var current = this.head;
    while(current.next){
        current = current.next;
    }
    current.next = node;
    this.length++;
    return node;

}

var list = new Linklist();
//list.add(3);
list.add(4);
list.add(7);
list.add(5);
list.add(6);

console.log(list.head.next);
