/**
 * Created by Dunna on 5/2/2016.
 */
//Given [1,1,1,2,2,3] and k = 2, return [1,2].
/*var topKFrequent = function(nums, k) {
    var number = [];
    for(var i=0;i<=nums.length-1;i++){
        var count=1;
        for(var j=i+1;j<=nums.length-1;j++){
            if (nums[i]==nums[j]){
                count = count+1;
            }
        }
        if (k==count){
            console.log(nums[i],count);
            number.push(nums[i]);
        }
    }
    return number;
};
var a=topKFrequent([1,1,1,2,2,3],2);
console.log(a);


var reverseVowels = function(s) {
    var s= s.split(''),vowels=['a','e','i','o','u'],j=s.length-1,i=0,temp;
    while (i<=j) {

        if (!(s[i] == 'a' || s[i] == 'e' || s[i] == 'i' || s[i] == 'o' || s[i] == 'u')) {
            i++;
            continue;
        }
        if (!(s[j] == 'a' || s[j] == 'e' || s[j] == 'i' || s[j] == 'o' || s[j] == 'u')) {
            j--;
            continue;
        }

            console.log(i, j, s[i], s[j]);
            temp = s[i];
            s[i] = s[j];
            s[j] = temp;
        i++;
        j--;
    }
    return s.toString();

};

var a = reverseVowels('leetcode');
console.log(a)


var countBits = function(num) {
    var res = [],b;
    for (var i =0;i<=num;i++){
        var count =0;
        for (var j=0;j<=i;j++){
            b= j%2;
            if (b==1){
              count++;
            }
            console.log(count);
            res.push(count);
        }
    }
    return res;
};

var b = countBits(2);
console.log(b);

var integerBreak = function(n) {
    var res;
    if (n%3==1){
        console.log(n%3);
        var a = parseInt((n-4)/3);
        console.log(a);
        res = (Math.pow(3,a))*4;
    }
    return res;
};
var c = integerBreak(10);
console.log(c);




var a = [1,2,3,4,5,6,7,8],res;

for (var i=0;i< a.length;i++)
{
    for (var j=i+1;j< a.length;j++){
        res = a[i]+a[j];
        if (res == 9){
            console.log(a[i],a[j]);
        }
    }
}

var x = Math.ceil(10.126);
console.log(x);

function sum(a, b) {
    return (a || 0) + (b || 1);
}
 console.log(sum(sum(2, sum(3, sum()))));

*/

var x=5;

(function(){
    console.log(x);
    var x=10;
    console.log(x);
})();