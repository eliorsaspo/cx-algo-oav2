const insertion = (arr) => {
        for(let i = 1; i < arr.length; i++) {
            let j = i - 1       
            let ai = arr[i];

            while (j >= 0 && arr[j] > ai) {
                arr[j + 1] = arr[j];
                j--
        }
        arr[j + 1] = ai;
    }
    return arr;
};
console.log(insert([7, 4, 11, 8, -4, 0, 5]));
console.log(insert([25, -5, 128, 5, -23, 5369, 14, 47, 358, -3, 4, 65, 81, 91, -92, 63, -45, 1324]));