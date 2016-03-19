$( document ).ready(function() {
  var telaAlt = $(window).height();
  var telaHome = telaAlt-64;
  $('.home').css("height",telaHome);
});