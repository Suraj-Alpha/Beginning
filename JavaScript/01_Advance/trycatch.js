const convertTors = (doller) => 
{
   if (typeof doller === 'number')

   {
      return doller * 64
   }

   else 
   {
      throw Error('Amount needs to be in number')
   }
}
// const myvalue =convertTors('five')
// console.log(myvalue)
try{

   const myvalue =convertTors('five')
   console.log(myvalue)
}
catch(e){
console.log(e)

}

console.log("Program Craches")