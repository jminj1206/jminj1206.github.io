//상단메뉴고정
var currentScrollTop=0;
$(document).ready(function(){
  scrollController();
  $(window).scroll(function(){
    scrollController();
  });
});

function scrollController(){
  currentScrollTop = $(window).scrollTop();
  if(currentScrollTop > 200){
    $("header").addClass("fixed");
  }
  else {
    $("header").removeClass("fixed");
  }
}



//599 상단메뉴 토글
$(function(){
$('.a').click(function(){
$('.c').stop().slideToggle('fast');

})
});


$(window).resize(function(){
if(window.innerWidth<=599){
$('.c').hide();
}
if(window.innerWidth<=600){
$('.c').hide();
}
if(window.innerWidth<=1100){
$('.c').hide();
}
});




//슬라이더
$(function(){
count=1;

 var img=['img/a.jpg','img/b.jpg','img/c.jpg','img/a.jpg','img/b.jpg','img/c.jpg'];


 setInterval(function(){
 	$('#slider').css({'background-image':'url('+img[count++]+')','transition':'1s'});
 	if(count==img.length){ count=0; }
 },3000);

});




//scolldown

$(function(){
$( '' ).click( function() {
    $( 'html, body' ).animate( { scrollTop : 0 }, 400 );
    return false;
});
});




/*------------------
    Logo Slider
--------------------*/
$(document).ready(function(){
  $('.').owlCarousel();
});



/*------------------
    prev/next
--------------------*/
$(function(){
  $(".pre").click(function(){
  	$(".text_box > div:last").prependTo(".text_box");
  	$(".text_box").css("marginLeft","-390px");
  	$(".text_box").animate({marginLeft:0});
  });

  $(".next").click(function(){
  	$(".text_box").animate({marginLeft:"-=390px"}, function(){
  		$(".text_box > div:first").appendTo(".text_box");
  		$(".text_box").css({marginLeft:0});
  	});

  });
});


/*------------------
    read more
--------------------*/

$(function(){
  $('.t_box_1').hover(function(){

  	$('.t_box_1 span').fadeIn('slow');

  },function(){

  	$('.t_box_1 span').fadeOut('slow');

  });
 });


