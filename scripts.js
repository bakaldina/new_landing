jQuery.validator.addMethod("checkMask", function(value, element) {
    return /\+\d{1}\(\d{3}\)\d{3}-\d{4}/g.test(value);
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

window.onload=function(){
    setInterval(function(){
    var scroll = $(window).scrollTop();
    if (scroll == 0) {
    $(".main").animate({backgroundColor: '#9356e0'}, 400);
    $(".shadow-circle").animate({backgroundColor: 'rgba(164, 110, 233, 0.9)'}, 400);
    
    }
    if (scroll <= 500 && scroll >= 1) {
    $(".main").animate({backgroundColor: 'green'}, 400);
    $(".shadow-circle").animate({backgroundColor: 'rgba(0, 140, 0, 0.9)'}, 400);
    }
    }, 451);
};
