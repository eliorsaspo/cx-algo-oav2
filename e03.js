function selection(arr, len = arr.length) {
    arr.map((e, i) => {
        let min = i;

        for (let j = i + 1; j < len; j++) {
            if (arr[min] > arr[j]) {
                min = j;
            }
        }
        if (i !== min) {
            [arr[i], arr[min]] = [arr[min], arr[i]];
        }
    })

    return arr;
}
console.log(selection([55, 2, -45, 7, 6, 3, -6, 89, -75, 562, 1, 0]))