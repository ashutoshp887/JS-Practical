

/**
 * Write a function that checks if a string is Palindrome or not
 * Input: A string
 * Return : boolean,true if Palindrome and false if not palindrome
 * A palindrome is a word that reads the same backward or forward
 * Example: madam
 * 
 * 
 */

 //Method:1

function isPalindromes(ashu){
for(let i=0;i<=ashu.length/2;i++){
    
    if (ashu[i]!==ashu[ashu.length-1-i]){
        return false
    }
    

}
return true
}

console.log(isPalindromes("madami"))
 


 // 2nd Method

 function ashu(input){
input = input.toLowerCase();
let start =0;
let end = input.lenghth-1
for(start,end; start<=end;start++,end--){
    if(input[start]!==input[end]){
        return false;
    }
    
}
return true;
 }

 console.log(ashu("Madam"))


 //3rd Method

 function ashu1(input1){
const split= input1.split('');

const reverse = split.reverse()

const join= reverse.join('')

if(input1 === join){
    return true;
}
return false;
 }

 console.log(ashu1("madam"))