

//counter

$('.counter').stop().counterUp({
'time': 1500,
'delay': 10
});


//scolldown

$(function(){
$( '.with' ).click( function() {
    $( 'html, body' ).animate( { scrollTop : 0 }, 400 );
    return false;
});
});




