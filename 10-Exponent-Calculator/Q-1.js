function ashu(input,input3){
    if(typeof input3 !== "number"){
        throw new Error("should be in number")
    }
 let result =1
for(i=1;i<=input3;i++){
   result = result * input
}
return result
}
console.log(ashu(5,3))