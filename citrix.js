/**
 * Created by Dunna on 5/9/2016.
 */
/*(function() {
    console.log(1);
    setTimeout(function(){console.log(2)}, 1000);
    setTimeout(function(){console.log(3)}, 0);
    console.log(4);
})();

(function(x) {
    return (function(y) {
        console.log(x);
    })(2)
})(1);

*/
(function() {
    var foo = 1;
    function bar() {
        var foo = 2;
    }
    bar();
    console.log(foo);
    if(true) {
        var foo = 3;
    }
    console.log(foo);
})();
