// By using reduce()
let arr = [34,23,77,32,76,67];
let findMax = arr.reduce((max , num) => num > max ? num : max)
console.log(findMax);


//without method
function findMax(arr){
    let max  = arr[0];
    for(let i=1; i<arr.length; i++){
        if(arr[i] > max){
            max =arr[i];
        }
    }
    return max;
}
console.log(findMax[3,5,2,2,1]);