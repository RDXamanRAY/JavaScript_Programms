// let arr = [1,2,3,4,5];
// console.log(arr.reduce((a,b) => a+b , 0));


function findSum(arr){
    let sum = 0;
    for(let i of arr){
        sum += i;
    }
    return sum;
}
console.log(findSum([2,3,6,9,4]));