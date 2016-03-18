/**
 * Created by LUCAS on 18/03/2016.
 */
$( document ).ready(function() {
    //Ativa o menu no mobile
    $(".button-collapse").sideNav();
    var telaAlt = $( window ).height();
    // Aplica o tamanho da foto de acordo com a tela
    $('.home').css('height',telaAlt);

    /*var menuAlt = $('.menuSite').height();

    var contentHomeAlt = telaAlt - menuAlt;
    $('.contentHome').css('height',contentHomeAlt);*/
});