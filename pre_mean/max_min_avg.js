function statistics(arr){
    sum = 0
    max = arr[0]
    min = arr[0]
    for (var i = 0; i < arr.length; i ++){
        if (arr[i] > max){
            max = arr[i];
        }
        if (arr[i] < min){
            min = arr[i];
        }
        sum += arr[i];
    }
    avg = sum / arr.length;
    console.log('The minimum is: ' + min + ', the maximum is: ' + max + ', and the average is: ' + avg +'.')
    return;
}

statistics([1,-2,9,4])