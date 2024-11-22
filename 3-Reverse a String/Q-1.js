/**
 * Write a function that returns the reverse of a string
 * Input: A string
 * Return: reversed string
 * Example: AShu -> uhsa
 * 
 */

function reverse(String){
if(typeof String!=="string"){
    throw new Error("input string")
}
let result=""
for(i=String.length-1; i>=0;i--){
  
    result = result+String[i]
}
return result 
}
console.log(reverse("Ashu"))

console.log(reverse("hello Ashu Welcome in new world"))


//2nd Method 

function reversed(word){
 const c=  word.split("");
 const d = c.reverse();
 const e= d.join("")
return e
}

console.log(reversed("ASHUTOSH is good software engineer"))