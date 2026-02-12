// let arr = [44,12,66,23,87,34,12,1,9];
// let sortArr = arr.sort((a,b) => a-b);//Ascending Order
// let sortArr = arr.sort((a,b) => b-a);//Descending order
// console.log(sortArr);


//bubble Sort
let arr = [23,12,1,34,13,65];
for(let i=0; i<arr.length; i++){
    for(let j=0; j<arr.length-i-1; j++){
        if(arr[j] > arr[j+1]){
            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
        }
    }
}
console.log(arr);