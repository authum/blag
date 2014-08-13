$(document).ready(
  function(){
  $('#articletitlelistitem').mouseenter(function() {
       $(this).css({
           "background-color": "#FFF",
           "font-weight":  "bolder",
           "text-shadow":  "none"
           
       }); 
   });
   $('#articletitlelistitem').mouseleave(function() {
       $(this).css({
           "background-color": "#000000",
           "font-weight":  "lighter" 
         "text-shadow":  "2px 0px 0px #666"
       }); 
   });

});
