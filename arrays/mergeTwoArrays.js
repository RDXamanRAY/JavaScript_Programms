let arr1 = [1,2,3];
let arr2 = [4,5,6];
let marged = [];

for(let i=0; i<arr1.length; i++){
    marged.push(arr1[i]);
}

for(let j=0; j<arr2.length; j++){
    marged.push(arr2[j]);
}

console.log(marged);