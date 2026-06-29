 $.ajax({
      method: "GET",
      url: "https://dapi.kakao.com/v3/search/book?target=title",
      data:{ query:"소설" },
      headers:{Authorization: "KakaoAK c8ffc3ab6fd3e90abbd76c604e685526"}
    })
    .done(function( msg ) {
      console.log( msg );



      var boxs = document.getElementsByClassName('box');


          for(var i=0; i<boxs.length; i++){

            $("#list_a >.box").eq(i).append('<a href="sub.html">'+"<img src='"+msg.documents[i].thumbnail+"'/>"+"</a>");
            $("#list_a >.box").eq(i).append("<h3>"+'<a href="sub2.html">'+msg.documents[i].title+"</a>"+"</h3>");
            $("#list_a >.box").eq(i).append("<h4>"+msg.documents[i].price+"원</h4>");
            $("#list_a >.box").eq(i).append("<h6>"+msg.documents[i].authors+"</h6>");


            var str=msg.documents[i].contents;
            var str2=str.substring(0,60);

            $("#list_a >.box").eq(i).append("<p>"+'<a href="sub2.html">'+str2+"</a>"+"</p>");
            $("#list_a >.box").eq(i).append('<a href="#" class="btn">'+"click"+"</a>");  

          }

    });


    $.ajax({
      method: "GET",
      url: "https://dapi.kakao.com/v3/search/book?target=title",
      data:{ query:"레시피,요리" },
      headers:{Authorization: "KakaoAK c8ffc3ab6fd3e90abbd76c604e685526"}
    })
    .done(function( msg ) {
      console.log( msg );


            // for문 (8개)
          var boxs = document.getElementsByClassName('box');


          for(var i=0; i<boxs.length; i++){

            $("#list_b >.box").eq(i).append('<a href="#">'+"<img src='"+msg.documents[i].thumbnail+"'/>"+"</a>");
            $("#list_b >.box").eq(i).append("<h3>"+'<a href="sub2.html">'+msg.documents[i].title+"</a>"+"</h3>");
            $("#list_b >.box").eq(i).append("<h4>"+msg.documents[i].price+"원</h4>");
            $("#list_b >.box").eq(i).append("<h6>"+msg.documents[i].authors+"</h6>");


            var str=msg.documents[i].contents;
            var str2=str.substring(0,60);

            $("#list_b >.box").eq(i).append("<p>"+'<a href="sub2.html">'+str2+"</a>"+"</p>");
            $("#list_b >.box").eq(i).append('<a href="#" class="btn">'+"click"+"</a>");  

          }
    });


    $.ajax({
      method: "GET",
      url: "https://dapi.kakao.com/v3/search/book?target=title",
      data:{ query:"경제" },
      headers:{Authorization: "KakaoAK c8ffc3ab6fd3e90abbd76c604e685526"}
    })
    .done(function( msg ) {
      console.log( msg );

         // for문 (8개)
          var boxs = document.getElementsByClassName('box');


          for(var i=0; i<boxs.length; i++){

            $("#list_c >.box").eq(i).append('<a href="#">'+"<img src='"+msg.documents[i].thumbnail+"'/>"+"</a>");
            $("#list_c >.box").eq(i).append("<h3>"+'<a href="sub2.html">'+msg.documents[i].title+"</a>"+"</h3>");
            $("#list_c >.box").eq(i).append("<h4>"+msg.documents[i].price+"원</h4>");
            $("#list_c >.box").eq(i).append("<h6>"+msg.documents[i].authors+"</h6>");


            var str=msg.documents[i].contents;
            var str2=str.substring(0,60);

            $("#list_c >.box").eq(i).append("<p>"+'<a href="sub2.html">'+str2+"</a>"+"</p>");
            $("#list_c >.box").eq(i).append('<a href="#" class="btn">'+"click"+"</a>");  

          }




    });