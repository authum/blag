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

 $(window).bind("load", function () {
    var footer = $("#footer");
    var pos = footer.position();
    var height = $(window).height();
    height = height - pos.top;
    height = height - footer.height();
    if (height > 0) {
        footer.css({
            'margin-top': height + 'px'
        });
    }
});