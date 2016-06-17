/**
 * Created by Dunna on 4/4/2016.
 */
function selectionSort(arr){
    var len = arr.length;
    for(var j=0;j<len;j++) {
        var small = arr[j];
        for (var i =j+1; i < len; i++) {
            if (arr[i] < small) {
                small = arr[i];
                smallindex = i;
            }
        }
        console.log(small);
        var temp =arr[j];
        arr[j]= small;
        arr[smallindex] = temp;
    }
    console.log(arr);
}
selectionSort([7,5,2,3,5]);