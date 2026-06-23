$(function(){
        var dot = $("#dot ul li");
        var contents = $("#fullpage>.section");

        dot.click(function(e){
          e.preventDefault();
          var target = $(this);
          var index = target.index();
          var section = contents.eq(index);
          var offset = section.offset().top;
          $("html,body").animate({scrollTop:offset},600);
        });

        $(window).scroll(function(){
          var wScroll = $(this).scrollTop();

          if(wScroll >= contents.eq(0).offset().top){
            dot.css({"background":"rgba(255,255,255,0.1)"});
            dot.find("a").css({"background":"rgba(255,255,255,0.5)"});
            dot.removeClass("active");
            dot.eq(0).addClass("active");
            dot.eq(0).find("a").css({"background":"#898989"});
          }
          if(wScroll >= contents.eq(1).offset().top){
            dot.css({"background":"rgba(0,0,0,0.7)"});
            dot.find("a").css({"background":"rgba(0,0,0,0.5)"});
            dot.removeClass("active");
            dot.eq(1).addClass("active");
            dot.eq(1).find("a").css({"background":"#898989"});
          }
          if(wScroll >= contents.eq(2).offset().top){
            dot.removeClass("active");
            dot.find("a").css({"background":"rgba(0,0,0,0.5)"});
            dot.eq(2).addClass("active");
            dot.eq(2).find("a").css({"background":"#898989"});
          }
          if(wScroll >= contents.eq(3).offset().top){
            dot.removeClass("active");
            dot.find("a").css({"background":"rgba(0,0,0,0.5)"});
            dot.eq(3).addClass("active");
            dot.eq(3).find("a").css({"background":"#898989"});
          }
          if(wScroll >= contents.eq(4).offset().top){
            dot.removeClass("active");
            dot.find("a").css({"background":"rgba(0,0,0,0.5)"});
            dot.eq(4).addClass("active");
            dot.eq(4).find("a").css({"background":"#898989"});
          }
          if(wScroll >= contents.eq(5).offset().top){
            dot.removeClass("active");
            dot.find("a").css({"background":"rgba(0,0,0,0.5)"});
            dot.eq(5).addClass("active");
            dot.eq(5).find("a").css({"background":"#898989"});
          }

        });

        return false;
      });





//타이핑//

$(function(){
var typingBool = false; 
      var typingIdx=0; 
      var liIndex = 0;
      var liLength = $(".typing-txt>ul>li").length;

      var typingTxt = $(".typing-txt>ul>li").eq(liIndex).text(); 
      typingTxt=typingTxt.split(""); 
      if(typingBool==false){  
        typingBool=true; 
        var tyInt = setInterval(typing,150); 
      } 

      function typing(){ 
        if(typingIdx<typingTxt.length){ 
          $(".typing").append(typingTxt[typingIdx]); 
          typingIdx++; 
        } else{ 
          if(liIndex>=liLength-1){
            liIndex=0;
          }else{
            liIndex++; 
          }


          typingIdx=0;
          typingBool = false; 
          typingTxt = $(".typing-txt>ul>li").eq(liIndex).text(); 


          clearInterval(tyInt);
          setTimeout(function(){
            $(".typing").html('');
            tyInt = setInterval(typing,150);
          },1000);
        } 
      }  
});




//img left slide s1
function slide1(){
	$('.porfolimg1').stop().animate({marginTop:-300},700,function(){
		$('.porfolimg1 li:first').appendTo('.porfolimg1');
		$('.porfolimg1').css('margin-top',0);
	});
}
setInterval(slide1,3000);




//img left slide s2
/*
function next2(){
        $('.porfolimg2').stop().animate({marginLeft:-300},function(){
          $('.porfolimg2 > li:first').appendTo('.porfolimg2');
          $('.porfolimg2').css({marginLeft:0});
        });
      }
setInterval(next2,5000);
*/
function slide2(){
	$('.porfolimg2').stop().animate({marginTop:-300},700,function(){
		$('.porfolimg2 li:first').appendTo('.porfolimg2');
		$('.porfolimg2').css('margin-top',0);
	});
}
setInterval(slide2,3000);




//img left slide s3

function slide3(){
	$('.porfolimg3').stop().animate({marginTop:-300},700,function(){
		$('.porfolimg3 li:first').appendTo('.porfolimg3');
		$('.porfolimg3').css('margin-top',0);
	});
}
setInterval(slide3,3000);



//img left slide s4

function slide4(){
	$('.porfolimg4').stop().animate({marginTop:-300},700,function(){
		$('.porfolimg4 li:first').appendTo('.porfolimg4');
		$('.porfolimg4').css('margin-top',0);
	});
}
setInterval(slide4,3000);







//hover

  $(function(){
    $('.aphotowrap').hide();
    $('.hover1').hover(function(){
      $(this).children('.aphotowrap').stop().fadeIn();
    },function(){
      $(this).children('.aphotowrap').stop().fadeOut();
    });
  });

  $(function(){
    $('.aphotowrap').hide();
    $('.hover2').hover(function(){
      $(this).children('.aphotowrap').stop().fadeIn();
    },function(){
      $(this).children('.aphotowrap').stop().fadeOut();
    });
  });

  $(function(){
    $('.aphotowrap').hide();
    $('.hover3').hover(function(){
      $(this).children('.aphotowrap').stop().fadeIn();
    },function(){
      $(this).children('.aphotowrap').stop().fadeOut();
    });
  });

  $(function(){
    $('.aphotowrap').hide();
    $('.hover4').hover(function(){
      $(this).children('.aphotowrap').stop().fadeIn();
    },function(){
      $(this).children('.aphotowrap').stop().fadeOut();
    });
  });



