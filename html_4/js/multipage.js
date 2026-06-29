$(function(){

      //multipage
       var i =0;
       $("#booklist>li").mouseenter(function(){
         i = ($(this).index())+1
         $("#b_list > article").hide()
         $("#b_list > article:nth-of-type"+"("+i+")").stop().fadeIn("slow")
       })

      });