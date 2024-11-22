/**
 * Write a function that calculate and prints the area of a reactangle givern its length and width.
 * Input length and width
 * Area of a reactangle = length *  width
 * Print the area on the console
 */

function reactangle(length,width){
    if(length<0){
        throw new RangeError("use positive value in breadth ")
    }
        
    
    if(width<0){
        throw new RangeError("use positive value in width")
    }
      
    const area = length * width
    console.log("Area of a reactangle",area)
}

 reactangle(3,8)
 reactangle(7,7)
