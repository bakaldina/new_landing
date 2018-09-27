jQuery.validator.addMethod("checkMask", function(value, element) {
    return /\+\d{1}\(\d{3}\)\d{3}-\d{4}/g.test(value);
});

$(function(){
    $('a[href^="#"]').on('click touchstart', function(event) {
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

   $.get("/taxiportation", {phone: phone}, function(response) {
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
    if (window.screen.width > 768) {
        $(".video-modal" + number).show();
    }
}
function modalClose(number) {
    if (window.screen.width > 768) {
        $(".video-modal" + number).hide();
    }
}
  
$(window).scroll(function() {
    if (window.screen.width > 768) {
        if ($(window).scrollTop() == 0){
            $('.rim').css({transform:"rotate(0)"});
        }
        if ($(window).scrollTop() > 120){
            $('.rim').css({transform:"rotate(-20deg)"});
        }
        if ($(window).scrollTop() > 150){
            $('.rim').css({transform:"rotate(-40deg)"});
        }
        if ($(window).scrollTop() > 180){
            $('.rim').css({transform:"rotate(-60deg)"});
        }
        if ($(window).scrollTop() > 210){
            $('.rim').css({transform:"rotate(-80deg)"});
        }
        if ($(window).scrollTop() > 240){
            $('.rim').css({transform:"rotate(-100deg)"});
        }
        if ($(window).scrollTop() > 270){
            $('.rim').css({transform:"rotate(-120deg)"});
        }
        if ($(window).scrollTop() > 300){
            $('.rim').css({transform:"rotate(-140deg)"});
        }
        if ($(window).scrollTop() > 330){
            $('.rim').css({transform:"rotate(-160deg)"});
        }
        if ($(window).scrollTop() > 360){
            $('.rim').css({transform:"rotate(-180deg)"});
        }
        if ($(window).scrollTop() > 390){
            $('.rim').css({transform:"rotate(-200deg)"});
        }
        if ($(window).scrollTop() > 420){
            $('.rim').css({transform:"rotate(-220deg)"});
        }
        if ($(window).scrollTop() > 450){
            $('.rim').css({transform:"rotate(-240deg)"});
        }
        if ($(window).scrollTop() > 470){
            $('.rim').css({transform:"rotate(-260deg)"});
        }
        if ($(window).scrollTop() > 520){
            $('.rim').css({transform:"rotate(-280deg)"});
        }
        if ($(window).scrollTop() > 550){
            $('.rim').css({transform:"rotate(-300deg)"});
        }
    }
});

 $(window).scroll(function () {
    if ($('.right-back-man').offset().top < 1300 && $('.right-back-man').offset().top > 323) {
        $('.right-back-man--copy').css('opacity', '1');
        $('.right-back-man--copy').offset($('.right-back-man').offset());
    } else {
        $('.right-back-man--copy').css('opacity', '0');
    }
});

if (window.screen.width > 768) {
var controller = new ScrollMagic.Controller();
var tween = TweenMax.to(".main__head", 1,  {x: 0});
var scene = new ScrollMagic.Scene({offset: 120,duration: 500})
                            .setTween(tween)
                            .setPin(".main__head")
                            .addTo(controller);
var tween1 = TweenMax.to(".main__back", 1, {x: "-50%"});
var scene1 = new ScrollMagic.Scene({offset: 120, duration: 500})
                            .setTween(tween1)
                            .setPin(".main__back")
                            .addTo(controller);
}
