/**
 * Write a function that calcualtes and prints the sum of the digits of
 * a given number
 * Input: A number,positive integer-> 12,34,123,1234
 * Return: sum of all digits
 * Example: 12 : 1+2 =3
 */


function sum(input){
    if(input <1){
        throw new Error("use positive number")
        
    }
    const string = input.toString();
    const split1 = string.split('')
    
    let final =0;
split1.forEach(num=>{
 
    final = final + parseInt(num)
   })
   return final;
}
console.log(sum(56))


// 2nd  Method with use of String 

const method =(number)=>{
let number1 = number
let result=0
while(number1>0){
    let solution= number1 % 10;
    number1 = Math.floor(number1/10)
 result = result +solution
}
return result ;
}

console.log(method(23))