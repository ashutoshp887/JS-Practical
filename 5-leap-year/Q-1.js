/**
 * Write a function that tells if provided year is a leap year or not
 * Input: A number , positive integer -> 1900,2023
 * Return : true if leap year , false if not leap year
 * leap year :
 * Every 4th year is a leap year 
 * Leap year has 366 days 
 * Normal year has 365 days
 * February has 28 days or 29 days 
 */

function leap(a){
    if(a%4===0){
        return true;
    }
    else{
        return false
    }
}
console.log(leap(2021));