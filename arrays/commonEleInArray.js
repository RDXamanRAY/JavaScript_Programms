//with method
function common3(a,b,c){
    return a.filter(x => b.includes(x) && c.includes(x));
}
console.log(common3([1,4] , [2,4] , [3,4]));

//without method

function common(a,b,c){
    let newArr = [];

    for(let i=0; i<a.length; i++){
        let foundInB = false;
        for(let j=0; j<b.length; j++){
            if(a[i] === b[j]){
                foundInB = true;
                break;
            }
        }


        if(!foundInB) {
            continue;
        }   
            let foundInC = false;
            for(let k=0; k<c.length; k++){
                if(a[i] === c[k]){
                    foundInC = true;
                    break;
                }
            }
            
        if(foundInC){
            newArr[newArr.length] = a[i];
        }
    }
    return newArr;
}

console.log(common([1,4] , [2,4] , [3,4]));