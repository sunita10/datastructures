/**
 * Created by Dunna on 4/1/2016.
 */
function quickSort(arr, sindex,eindex){
    console.log('given array'+arr,sindex,eindex);
    var len = arr.length,partid,pivot;
    if(sindex<eindex){
        pivot = eindex;
        partid = part(arr,pivot,sindex,eindex);
        console.log('part'+partid);
        quickSort(arr,sindex,partid-1);
        console.log(partid+1);
        quickSort(arr,partid+1,eindex);
    }
   // return arr;
    console.log('finalarr'+arr);
}
function part(arr,pivot,sindex,eindex){
        var  pivot = arr[eindex],partindex=0;
        console.log('pivot'+pivot);
        for(var i=0;i<=eindex;i++){
            if (arr[i]<pivot){
                swap(arr,i,partindex);
                partindex = partindex+1;
            }
        }
        swap(arr,eindex,partindex);
        return partindex;

}
function swap(arr,i,j){
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    console.log(arr);
}

quickSort([3,7,8,4,2,1,5],0,6);
