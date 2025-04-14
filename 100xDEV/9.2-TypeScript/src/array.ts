type NumberArr = number[];

function maxValue(arr: NumberArr){
    let max =0
    for(let i=0; i<arr.length; i++){
        if(arr[i]>max){
            max = arr[i];
        }
    }
    return max;
}



maxValue([1,2,3,4,5,6,7,8,9,10]);
