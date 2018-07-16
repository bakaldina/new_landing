jQuery.validator.addMethod("checkMask", function(value, element) {
    return /\+\d{1}\(\d{3}\)\d{3}-\d{4}/g.test(value);
});

$(function(){
    $('a[href^="#"]').on('click', function(event) {
      event.preventDefault();
      var sc = $(this).attr("href"),
          dn = $(sc).offset().top;    
      $('html, body').animate({scrollTop: dn}, 500);
    });
});

$('#form').validate();
  $.validator.addClassRules({
    'js-phone-up': {
      checkMask: true
    }
});

$('.js-phone-up').mask("+7(999)999-9999", {
    autoclear: false
});

$("#form").submit(function(e){
   e.preventDefault();
   var phone = $('.js-phone-up').val().replace(/\D/g,'');
   if (phone.length !== 11) {
       return;
   }

   var tokenName = $("meta[name=csrf-token-name]").prop("content"); // 
   var token = $("meta[name=csrf-token]").prop("content");

   $.get("/", {phone: phone}, function(response) {
    if (!response.hasOwnProperty("success") || response.success == false) {
        if (response.hasOwnProperty('errors') && response.errors.hasOwnProperty('msg')){
            $(".modal-text").html(response.errors.msg);
            ga('send', 'event', 'SMS_landing', 'not_send', response.errors.msg);
        } else {
            $(".modal-text").html("Произошла ошибка");
        }
    } else {
        $(".modal-text").html("Ссылка для скачивания была отправлена на ваш номер телефона");
        ga('send', 'event', 'SMS_landing', 'send');
    }
        
        var openbutton = document.querySelector('.js-OpenModal');
        var modalwindow = document.querySelector('.modals');
        var closebutton = document.querySelector('.modals .close');
        var modalsOverley = document.querySelector('.modals__overlay');
        modalwindow.classList.add("show");
        var closebutton = document.querySelector('.modals .close');
        var modalsOverley = document.querySelector('.modals__overlay');
        modalsOverley.onclick = function() {
            modalwindow.classList.remove("show");
        }
        closebutton.onclick = function() {
            modalwindow.classList.remove("show");
        }
    });
});

$('.button').mouseenter(function() {
  $(this).closest('.button').find('.svg').css('fill', '#fff');
}).mouseleave(function() {
  $(this).closest('.button').find('.svg').css('fill', '#FFC700');
});

function modalOpen(number) {
    $(".video-modal" + number).show();
}
function modalClose(number) {
    $(".video-modal" + number).hide();
    $('iframe').attr('src',''); 
}
  
$(window).scroll(function() {
    if (window.screen.width > 768) {

        if ($(window).scrollTop() == 0){
            $('.main__back ').css({left:"0"});
            $('.rim').css({transform:"rotate(0)"});
        }
        if ($(window).scrollTop() > 30){
            $('.main__back').css({left:"-20%"});
            $('.rim').css({transform:"rotate(-20deg)"});
        }
        if ($(window).scrollTop() > 50){
            $('.main__back').css({left:"-40%"});
            $('.rim').css({transform:"rotate(-40deg)"});
        }
        if ($(window).scrollTop() > 70){
            $('.main__back').css({left:"-60%"});
            $('.rim').css({transform:"rotate(-60deg)"});
        }
        if ($(window).scrollTop() > 90){
            $('.main__back').css({left:"-80%"});
            $('.rim').css({transform:"rotate(-80deg)"});
        }
        if ($(window).scrollTop() > 110){
            $('.main__back').css({left:"-100%"});
            $('.rim').css({transform:"rotate(-100deg)"});
        }
    }
});
