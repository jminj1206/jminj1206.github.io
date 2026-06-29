
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