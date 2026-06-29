// Wrap every letter in a span
$(function(){
var textWrapper = document.querySelector('.ml1');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml1 .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 1300,
    delay: (el, i) => 150 * (i+1)
  }).add({
    targets: '.ml1',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 400
  });
    
    
var textWrapper = document.querySelector('.ml2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter2'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml2 .letter2',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 600,
    delay: (el, i) => 150 * (i+1)
  }).add({
    targets: '.ml2',
    opacity: 0,
    duration: 0,
    easing: "easeOutExpo",
    delay: 300
  });
    
    
});    



