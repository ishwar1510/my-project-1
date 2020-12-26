function light(value){
   var pic;
   if(value == 0)
   {
      pic="off.jpg";
   }
   else{
      pic="on.jpg";
   }
   document.getElementById('bulb').src=pic;
}