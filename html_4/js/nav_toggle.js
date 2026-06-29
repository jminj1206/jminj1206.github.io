$(function () {
  $('.category .nav_menu_sub').stop().hide();
  $('.category').hover(function () {
      $(this).children('.category .nav_menu_sub').stop().fadeIn();
  }, function () {
      $('.category .nav_menu_sub').stop().hide();
  });
});