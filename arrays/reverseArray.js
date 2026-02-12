function reverseArr(arr){
    let newArray = [];
    for(let i=arr.length-1; i>0; i--){
        newArray.push(arr[i]);
    }
    return newArray;
}
console.log(reverseArr([34,12,77,23,97]));


let array = [23,54,24,66];
console.log(array.reverse());