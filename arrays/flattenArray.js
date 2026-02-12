//with method
console.log([1,[2,[3,4],5],6].flat(Infinity));


function flatArray(arr){
    let newArray = [];
    for(let i of arr){
        if(Array.isArray(i)){
            newArray.push(...flatArray(i));
        }else{
            newArray.push(i);
        }
    }
    return newArray;
}
console.log(flatArray([1,[2,[3,4],5],6]));