//with method
let arr = [1,"aman" , 0 , 34 ,67 ,NaN , undefined];
let clean = arr.filter(Boolean);
console.log(clean)


//without method
function removeFalsy(arr){
    let newArr = [];
    for(let i=0; i<arr.length; i++){
        if(arr[i]){
            newArr[newArr.length] = arr[i];
        }
    }
    return newArr;
}
console.log(removeFalsy([1,4,2,3,0,NaN,undefined,true]))