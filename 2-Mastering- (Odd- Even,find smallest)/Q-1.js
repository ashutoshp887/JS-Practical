
/**
 * Write a function that tells if a given number is even or odd
 * Input: A number 
 * Return: "even" if  the number is even, "odd" if the number is Odd
 * Even : Number when divided by 2 has zero remainder
 * 
 */

 // 1st Method

function ashu(a){
   const c= a%2

if(c===0){
    return  "even"
}else{
    return "odd"
}
}
console.log(ashu(2));


// 2nd Method

function  method(b){
   return b%2 ===0 ?"even":"odd"
}

console.log(method(3))