/**
 * Created by Dunna on 4/5/2016.
 */
/*function repeatString(str){
     var str = str.split(''), s,obj = {};
     for (var i = 0;i<str.length;i++){
          var count=1;
          for (var j=i+1;j<str.length;j++){
                    if (str[i] == str[j]){
                         count=count+1;
                    }
          }
          if (count>=1){
               s=str[i];
               if (!(s in obj))
               obj[s]=count;
          }
          //obj[str[i]] = c;
     }
          console.log(obj);
}
repeatString('javascript');
*/
//var arr = [1,2,3];
//arr.map(Math.sqrt);
//console.log(arr);
//var string = "";
//for (var i=0;i<arr.length;i++){
//     string = string+' '+arr[i];
//    //console.log(string);
//}
//console.log(string);
//
/*
var num = 17,c=0;
for (var i=1;i<=num;i++){

     if (num%i == 0){
          c++;
     }

}
if (c<=2)
{
     console.log('prime'+c);
}
else{

     console.log('not prime'+c);
}
function Machine(){
     this.parts=[];
}
Machine.prototype.capabilities =[];
var robot = new Machine();
var robby = new Machine();

robot.parts.push('robo');
robot.capabilities.push('fly');

console.log(robot.parts,robot.capabilities);
console.log(robby.parts,robby.capabilities);



var salary = "1000$";

function sal() {
    console.log("Original salary was " + salary);

    var salary = "5000$";

    console.log("My New Salary " + salary);
}

sal();




(function() {
    console.log(bar);
    console.log(baz);
    foo();

    //function declaration AND its body is hoisted
    function foo() {
        console.log('aloha');
    }
    var bar = 1;
     baz = 2;
})();
*/

/*function foo(a,b,c){
    console.log(a,b,c);

}
foo(1,2);
foo(1,2,3,4);

function  hello(a){
    a();
}
function a(){
    console.log('helloworld');
}
hello(a);
*/

function anagram (str1,str2){
    console.log('str1 '+str1+ ' str2 '+str2);
    var str1=str1.split('').sort().toString(),str2=str2.split('').sort().toString();
    console.log(typeof(str1));
    console.log('str1'+str1+'str2'+str2);
    if (str1 == str2){
        console.log("anagram");
    }
    else{
        console.log("not an anagram");
    }
}

anagram('iceman','cinemaa');

