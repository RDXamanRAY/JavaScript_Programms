let isPalindrome = (str) => {
    let rev = "";
    for(let i=str.length-1; i>=0; i--){
        rev += str[i];
    }
    return rev==str ? str + " is Palindrome" : str + " is not Palindrome" ;
}
console.log(isPalindrome("mam"))


//with method
let Palindrome = (str) => {
    return str == str.split("").reverse().join("");
}
console.log(Palindrome("java"))