$(window).load(function() {
    $('.flexslider').flexslider();
  });



$(".read-more p").click(function(e){
    e.preventDefault();
    $(".hidden-text").show();   
});