window.onload = $(function() {
  $(".bestbox:nth-of-type(1)").click(function() {
      $(".bestsellerbox1").show();
      $(".bestsellerbox2").hide();
  });
  $(".bestbox:nth-of-type(2)").click(function() {
      $(".bestsellerbox2").show();
      $(".bestsellerbox1").hide();
  });

  $(".bestbox:nth-of-type(1)").click(function() {
      $(".bestbox:nth-of-type(2)").stop().css({
          borderBottom: "2px solid #999"
      });
          $(".bestbox:nth-of-type(1)").stop().css({
          borderRight: "2px solid #999" 
      });

      $(".bestbox:nth-of-type(1)").stop().css({
          borderBottom: "none"
      });
  });

  $(".bestbox:nth-of-type(2)").click(function() {
      $(".bestbox:nth-of-type(1)").stop().css({
          borderBottom: "2px solid #999"
      });
          $(".bestbox:nth-of-type(2)").stop().css({
          borderBottom: "none"
      });
  });

});