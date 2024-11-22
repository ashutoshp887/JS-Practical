
/**
 * Write a function that calculate factorial of a given number
 * Input : A number , positve integer->0,1,4,7
 * Return: Factorial of that number
 * Factorial : Multiplication of all positive integers from 1 to a given number
 *
 */

function factorial (a){
    let result =1
    for(i=1;i<=a;i++){
result= result*i
    }
    return result
}

console.log(factorial(10))