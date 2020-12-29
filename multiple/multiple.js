/*const isMultipleOfThree = num => {
   const div = parseInt(num / 3);
 
   return num === div * 3;
 };
 
 for (let i = 0; i <= 30; i++) {
   if (isMultipleOfThree(i)) {
     console.log(i);
   }
 }
 */

 //another method of multiple of 3

 const isMultipleOfThree = num => {
   if (num === 0) return true;
 
   if (num < 0) return false;
 
   return isMultipleOfThree(num - 3);
 };
 
 for (let i = 0; i <= 30; i++) {
   if (isMultipleOfThree(i)) {
     console.log(i);
   }
 }