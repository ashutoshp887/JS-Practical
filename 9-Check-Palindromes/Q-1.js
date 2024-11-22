

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
 h