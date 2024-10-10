$(document).ready(function(){
  $(".bennar-img").owlCarousel(({
    items:1,
    loop:true,
    autoplay:true,
    // autoplayTimeout:7000,
    // slideTransition:'ease',
    // smartSpeed:1000,
    // slideSpeed : 200,
    paginationSpeed : 800,

  }));
});
$(document).ready(function(){
  $(".Great-img").owlCarousel(({
    items:3,
    loop:true,
    autoplay:true,
    autoplayTimeout:4000,
    slideTransition:'ease',
    smartSpeed:1000,
  }));
});
$(document).ready(function(){
  $(".Our-Gallery").owlCarousel(({
    items:5,
    loop:true,
    autoplay:true,
    autoplayTimeout:5000,
    slideTransition:'ease',
    smartSpeed:1000,
  }));
  $('.up-ican').css({display: 'none'})
});
$(window).scroll(function(){
  if ($(this).scrollTop() > 100){
    $('.up-ican').css({display: 'block'});
  }
  else{
    $('.up-ican').css({display: 'none'});
  }
})