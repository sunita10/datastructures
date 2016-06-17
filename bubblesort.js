/**
 * Created by Dunna on 4/4/2016.
 */
function bubbleSort(arr){
    var len = arr.length;
    for (var j=0;j < len;j++){
        for(var i=0;i< len-1;i++){
            if (arr[i]>arr[i+1]){
                var temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
            }
        }
    }
    console.log(arr);
}
bubbleSort([7,5,2,4,3,9]);