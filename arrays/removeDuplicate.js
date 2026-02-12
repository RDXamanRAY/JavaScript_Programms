//set
function removeDuplicate(arr){
    return [...new Set(arr)];
}
console.log(removeDuplicate(1,4,3,2,2,4,5,5,6))

//filter()
// let arr = [1,2,2,3,4,4,5];
// let unique = arr.filter((val , index) => arr.indexOf(val) === index);
// console.log(unique);



let arr = [1,2,3,3,4,4,5];
let obj = {};
let unique = [];

for(let i of arr){
    if(!obj[i]){
        obj[i] = true;
        unique.push(i);
    }
}
console.log(unique)