function binarySearch(arr, num){
    var minIndex = 0;
    var maxIndex = arr.length - 1;

    while (minIndex <= maxIndex){
        var middleIndex = Math.floor((minIndex + maxIndex) / 2);
        console.log(arr[middleIndex])
        if (num == arr[middleIndex]){
            return console.log('found');
        }

        if (num > arr[middleIndex]){
            minIndex = middleIndex + 1;
            console.log('updated minIndex to:' + minIndex)
        }

        if ( num < arr[middleIndex]){
            maxIndex = middleIndex - 1;
            console.log('updated maxIndex to:' + maxIndex)

        }
    }
    return console.log('not found');
}

binarySearch([1, 3, 8, 10, 12, 15, 17, 20, 22, 34, 38, 40, 50, 52, 78, 87, 90, 91, 92, 94], 4)