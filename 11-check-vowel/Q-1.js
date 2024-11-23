
/**
 * Write a function that counts and prints the number of vowels
 * and consonants in a given string
 * input:string 
 * Return : Vowel and Consonant count
 * vowel: a e i o u
 * consonant : All other character
 * Example : 
 * "hello world" => 3 vowels and 7 consonants
 * 
 */






//1st Method

function ashu(input){
    input= input.toLowerCase();
    input = input.replace(/ /g,'')
    console.log(input)
    let vowel='aeiou'
    let consonant ="bcdfghjklmnpqrstvwxyz"
    let count =0;
    let count1=0;
for(i=0;i<=input.length;i++){
if(vowel.includes(input[i])){
   count++
}
else if(consonant.includes(input[i])){
    count1++
}
}
return {count,count1}
}

console.log(ashu("Hi I am World best software engineer"))



//2nd Method 

function ashu(input1){
    input1= input1.toLowerCase();
    input1 = input1.replace(/ /g,'')
    console.log(input1)
    let vowel='aeiou'
    let consonant ="bcdfghjklmnpqrstvwxyz"
    let count2 =0;
    let count3=0;
for(i=0;i<=input1.length;i++){
if(vowel.includes(input1[i])){
   count2++
}
else if(/^[a-z]$/.test(input1[i])){
    count3++
}
}
return {count2,count3}
}

console.log(ashu("Hi I am World best software engineer"))