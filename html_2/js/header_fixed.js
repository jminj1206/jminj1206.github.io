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
     $(".a").click(function(){
      $(".b").slideToggle();

    });
    
    $(".c").click(function(){
      $(".b").slideToggle();

    });
    });

$(window).resize(function(){
     if(window.innerWidth<=599){
        $('.b').show();
     }

    });

