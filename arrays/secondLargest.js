function secondLargest(arr){
    let max1 = -Infinity;
    let max2 = -Infinity;

    for(let i of arr){
        if(i > max1){
            max2 = max1;
            max1 = i;
        }else if(i > max2 && i!=max1){
            max2 = i;
        }
    }

    return max2;
}
console.log(secondLargest([23,12,565,343,76]));


//With Metod
let arr = [23,12,53,27];
let secLargest = arr.sort((a,b) => b-a )[1];
console.log(secLargest);