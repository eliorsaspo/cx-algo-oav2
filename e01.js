function swap(arr, firstindex, secondindex){
    let TP = arr[firstindex];
    arr[firstindex] = arr[secondindex];
    arr[secondindex] = TP
}

function sort(arr){
    let len = arr.length,
    i, k, fin;

    for(i=0; i < len; i++){
        for(k = 0, fin = len-i; k < fin; k++) {
            if (arr[k] > arr[k + 1]){
                swap(arr, k, k + 1);
            }
        }
    }

    return arr;
}
console.log(sort([5, 8, -1, 7, 3, 4]));