/*top_bar .mypage toggle*/
$(function(){
    $('.mypage').mouseover(function(){
    $('.login_sub').stop().slideDown();
  }).mouseout(function(){
    $('.login_sub').stop().slideUp();
  });
});


/*.sub_t_box .click toggle*/
$(function(){
    $('.click_main').mouseover(function(){
    $('.click_sub').stop().slideDown();
  }).mouseout(function(){
    $('.click_sub').stop().slideUp();
  });
});


/*slider*/
$(function(){     
var i=0;
function slide(){
  i++;
if (i > $(".slide li:last").index()) {
     i = 0;
     }
    $(".slide>li").eq(i).stop().fadeIn("slow");
    $(".slide>li").eq(i - 1).stop().fadeOut();

       if (i == 1) {
          $("#slider").css({
            "background": "#fffaf2"
        })
        
        } else if (i == 2) {
          $("#slider").css({
            "background": "#ffdc75"
          })
        } else if (i == 3) {
          $("#slider").css({
            "background": "#fff"
          })
        } else {
          $("#slider").css({
            "background": "#d6d1cb"
          })
        }
    }
  setInterval(slide, 3000)
});
     


/*click slide*/
$(function(){   
function prev() {
  $('.c_slide li:last').prependTo('.c_slide');
  $('.c_slide').stop().css({
    marginLeft: 0
  });
}

function next() {
  $('.c_slide li:first').appendTo('.c_slide');
  $('.c_slide').stop().css({
    marginLeft: 0
  });
}

$('.prev').click(function() {
    prev();
});

$('.next').click(function() {
    next();
});

});