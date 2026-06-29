/*.sub_t_box .click toggle*/
$(function(){
    $('.click_main').mouseover(function(){
    $('.click_sub').stop().slideDown();
  }).mouseout(function(){
    $('.click_sub').stop().slideUp();
  });
});

