/**
 * Write a function that finds and prints the maximum element in an
 * array of numbers.
 * Input: Array of Numbers
 * Return: Biggest Number
 * Example: [3,6,7,8,9] =>9
 * 
 */


function method(array){
    if(!array || array.length === 0){
        throw new Error("You can not set blank araay")
    }
    let bignumber = array[0]
for(i=1; i<=array.length;i++){
    if(array[i]>bignumber){
        bignumber = array[i]
    }
}
return bignumber
}

console.log(method([2,3,4,5]))


//2nd method

function method2(number){
const num4 = Math.max(...number)
return num4
}
console.log(method2([5,8,9,12]))