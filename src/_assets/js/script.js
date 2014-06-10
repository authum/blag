/*$(document).ready(
  function(){
  $('#test').click(function(){
    $(this).fadeOut('fast');
  });
  $('li').hover(function() {
    $( this ).css({ "color", "red" 
                    "font-weight": "bolder"
                 });
       });
   });
   $('li').mouseleave(function() {
       $(this).animate({
           height: '-=10px'
       }); 
   });
});
*/
$(document).ready(
  function(){
//  $('p,h1,h2,h3,h4,h5,h6').click(function(){
//    $(this).fadeOut('slow');
//  });
  $('#articletitlelistitem').mouseenter(function() {
       $(this).css({
           "background-color": "#eeeeee",
           "font-weight":  "bolder" 
       }); 
   });
   $('#articletitlelistitem').mouseleave(function() {
       $(this).css({
           "background-color": "#000000",
           "font-weight":  "lighter" 
       }); 
   });
//var ishidden = false;
/*    
//    $("#header").mouseenter(function() {
     $delay(1000).(this).slideUp("slow");
//       ishidden = true;
//    });  
  
   $('#header').mouseleave(function() {
       $(this).slideUp(  "slow"  ); 
   }); 
   */
    var my_timer;
$("#header").hover(
    function () {
        clearTimeout(my_timer);
        $(this).show();
    }, 
    function () {
        var $this = $(this);
        my_timer = setTimeout(function () {
            $this.hide();
        }, 500);
    }                       
);
});