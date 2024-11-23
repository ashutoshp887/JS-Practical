
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