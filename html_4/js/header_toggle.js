/*top_bar .mypage toggle*/
$(function(){
    $('.mypage').mouseover(function(){
    $('.login_sub').stop().slideDown();
  }).mouseout(function(){
    $('.login_sub').stop().slideUp();
  });
});

