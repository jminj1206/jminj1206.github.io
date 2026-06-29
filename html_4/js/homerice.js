$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"집밥", size:10},
    headers:{Authorization: "KakaoAK c8ffc3ab6fd3e90abbd76c604e685526"}
  })
    .done(function( msg ) {

        console.log( msg.documents[1].title );
        console.log( msg.documents[1].thumbnail );


      // for문 (8개)
            var divs = document.getElementsByTagName('div');
            
            for(var i=0; i<divs.length; i++){
 
              $(".b_box").eq(i).append("<img src='"+msg.documents[i].thumbnail+"'/>");
              $(".b_box").eq(i).append("<h3>"+msg.documents[i].title+"</h3>");
              $(".b_box").eq(i).append("<h4>"+msg.documents[i].price+"원</h4>");
              $(".b_box").eq(i).append("<h6>"+msg.documents[i].authors[0]+"</h6>");


              var str=msg.documents[i].contents;
              var str2=str.substring(0,60);

              $(".b_box").eq(i).append("<p>"+str2+"</p>");
              $(".b_box").eq(i).append("<button>"+"click"+"</button>");  
  
            }
      
      

    });
