/**
 * Created by Dunna on 4/5/2016.
 */
function htmlList(args){
    var len = args.length;
    document.write(args);
    var list = document.createElement('ul');
    for (var i=0;i<len;i++){
        var item = document.createElement('li');
        list.appendChild(item);
        item.appendChild(document.createTextNode(args[i]));
    }
    return list;
}
document.body.appendChild(htmlList(['test1','test2','test3']));
