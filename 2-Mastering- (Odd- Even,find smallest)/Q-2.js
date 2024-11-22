
/**
 * Write a function that finds the smallest number among three given numbers.
 * Input: 3 numbers
 * Return : Smallest number
 * Example : 3,1,6,->1
 * Math.min is not allowed
 * Pause the video and try it yourself
 */


function min (a,b,c){
if(a<b && a<c){
    return a
}
else if(b<a&&b<c){
    return b
}
else if(c<a && c<b){
    return c
}
return b
}

console.log(min(1,7,6))
console.log(min(-1,-7,-6))
console.log(min(6,6,5))
console.log(min(6,5,5))


//2nd Method

function smallest (a,b,c){
    let smallestnumber = a;
    if(b<smallestnumber){
        smallestnumber = b
    }
    else if(c<smallestnumber){
        smallestnumber =c
    }
    return smallestnumber
}
console.log(smallest(7,-1,5))