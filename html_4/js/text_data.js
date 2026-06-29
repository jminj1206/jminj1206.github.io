$(function(){
        $.get("./sub_txt/txt1.txt", function(data) {
         $("#tmpBox").html(data);
        })     
     });
