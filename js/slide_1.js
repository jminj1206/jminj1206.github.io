


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



//hover

$(function(){
$('.img_2').hide();
$('.img-box').hover(function(){
$(this).children('.img_2').stop().fadeIn();
},function(){
$(this).children('.img_2').stop().fadeOut();
});
});





//img left slide s1

function slide1(){
$('.porfolimg1').stop().animate({marginTop:-650},700,function(){
$('.porfolimg1 li:first').appendTo('.porfolimg1');
$('.porfolimg1').css('margin-top',0);
});
}
setInterval(slide1,2000);




//img left slide s2

function next2(){
  $('.porfolimg2').stop().animate({marginLeft:-700},function(){
    $('.porfolimg2 > li:first').appendTo('.porfolimg2');
    $('.porfolimg2').css({marginLeft:0});
  });
}
setInterval(next2,4000);



//img left slide s3

function next3(){
  $('.porfolimg3').stop().animate({marginLeft:-700},function(){
    $('.porfolimg3 > li:first').appendTo('.porfolimg3');
    $('.porfolimg3').css({marginLeft:0});
  });
}
setInterval(next3,4000);



//img left slide s4

function slide4(){
$('.porfolimg4').stop().animate({marginTop:-650},700,function(){
$('.porfolimg4 li:first').appendTo('.porfolimg4');
$('.porfolimg4').css('margin-top',0);
});
}
setInterval(slide4,2000);




//mobile img slide

$(function(){
$('.port > .mobile').mouseenter(function(){

$('.port > .mobile > .mobilepage > img').stop().animate({marginTop:"-6000px"},8000);

}).mouseleave(function(){

$('.port > .mobile > .mobilepage > img').stop().animate({margin:'0'},1000);

});


}) ;





//hover

$(function(){
$('.aphotowrap').hide();
$('.imgbox').hover(function(){
$(this).children('.aphotowrap').stop().fadeIn();
},function(){
$(this).children('.aphotowrap').stop().fadeOut();
});
});

$(function(){
$('.aphotowrap').hide();
$('.imgbox2').hover(function(){
$(this).children('.aphotowrap').stop().fadeIn();
},function(){
$(this).children('.aphotowrap').stop().fadeOut();
});
});


