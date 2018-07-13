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

$('.button').mouseenter(function() {
  $(this).closest('.button').find('.svg').css('fill', '#fff');
}).mouseleave(function() {
  $(this).closest('.button').find('.svg').css('fill', '#FFC700');
});

// function modalOpen() {
//     $(".video-modal").show();
//   }
  
//   function modalClose() {
//     $(".video-modal").hide();
//   }

function modalOpen(number) {
    $(".video-modal" + number).show();
}
function modalClose(number) {
    $(".video-modal" + number).hide();
}
  
// window.onload=function(){
//     setInterval(function(){
//     var scroll = $(window).scrollTop();
//     if (scroll == 0) {
//         $(".main").css({transform: translate('0')}, 400);
//     }
//     if (scroll <= 500 && scroll >= 1) {
//         $(".main").css({transform: translate('0px, -23.1729px, 0px')}, 400);
//     }
//     }, 451);
// };
$(window).scroll(function(){
    // 200px от верха
    if ($(window).scrollTop() == 0){
        $('.main__back ').css({left:"0"});
        $('.rim').css({transform:"rotate(0)"});
    }
    // 400px от верха
    if ($(window).scrollTop() > 10){
        $('.main__back').css({left:"-20%"});
        $('.rim').css({transform:"rotate(-20deg)"});
    }
    if ($(window).scrollTop() > 20){
        $('.main__back').css({left:"-40%"});
        $('.rim').css({transform:"rotate(-40deg)"});
    }
    if ($(window).scrollTop() > 30){
        $('.main__back').css({left:"-60%"});
        $('.rim').css({transform:"rotate(-60deg)"});
    }
    if ($(window).scrollTop() > 40){
        $('.main__back').css({left:"-80%"});
        $('.rim').css({transform:"rotate(-80deg)"});
    }
    if ($(window).scrollTop() > 50){
        $('.main__back').css({left:"-100%"});
        $('.rim').css({transform:"rotate(-100deg)"});
    }
    // if ($(window).scrollTop() > 60){
    //     $('.main__back').css({left:"-70%"});
    // }
    // if ($(window).scrollTop() > 70){
    //     $('.main__back').css({left:"-90%"});
    // }
    // if ($(window).scrollTop() > 80){
    //     $('.main__back').css({left:"-100%"});
    // }
});


/*! jScrollability 2016-12-05 01:12:58 */
// !function(a){var b=[],c={},d=0;a.fn.jScrollability=function(c,d,e){this.each(function(){b.push({start:c,end:d,fn:e,el:a(this),trigger:!1,duration:!1})})},a.fn.jScrollabilityTrigger=function(c,d,e){this.each(function(){b.push({start:c,end:!1,fn:e,el:a(this),trigger:!0,duration:d})})},a.jScrollability=function(c){a.each(c,function(c,d){var e=a(d.selector);e.length>0&&e.each(function(){b.push({start:d.start,end:d.trigger!==!0&&d.end,trigger:d.trigger===!0,duration:d.trigger===!0&&d.duration,fn:d.fn,el:a(this)})})})};var e=function(b,c,d){switch(typeof b){case"function":return b(c);case"string":if("parent"==b){if("start"==d)return c.parent().offset().top;if("end"==d)return c.parent().offset().top+c.parent().outerHeight()}else if("self"==b){if("start"==d)return c.offset().top;if("end"==d)return c.offset().top+c.outerHeight()}else{if("window"!=b)return 0;if("start"==d)return c.offset().top;if("end"==d)return c.offset().top+a(window).height()}default:return b}},f=function(a,b,c){switch(typeof c){case"function":c(a,b);break;case"object":if(c.class&&(b>0?(c.add&&c.add.forEach(function(b){a.addClass(klass)}),c.remove&&c.remove.forEach(function(b){a.removeClass(klass)})):(c.add&&c.add.forEach(function(b){a.removeClass(klass)}),c.remove&&c.remove.forEach(function(b){a.addClass(klass)}))),c.styles||!c.styles&&!c.class){var d=c.styles||c,e={};for(cssprop in d){var f=d[cssprop],g=f.end-f.start,h=f.start+b*g;e[cssprop]=h+f.unit}a.css(e)}}},g=function(){return d++ +""};a(document).ready(function(){var d=a(window),h=a(document),i=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame||function(a){setTimeout(a,10)},j=function(){var k=h.scrollTop()+d.height(),l=Date.now();a.each(b,function(a,b){var d=e(b.start,b.el,"start");if(b.trigger===!0){var h=b.el.attr("data-jscrollability-id");if(h||(h=g(),b.el.attr("data-jscrollability-id",h)),k>=d&&!c[h])c[h]=l;else if(c[h]&&c[h]!==!0){var i=l-c[h],j=i/b.duration;j<1?f(b.el,j,b.fn):(f(b.el,1,b.fn),c[h]=!0)}}else{var m=e(b.end,b.el,"end"),n=m-d,o=Math.min(n,Math.max(0,k-d)),j=o/n;f(b.el,j,b.fn)}}),i(j)};i(j)})}(jQuery);

// (function($) {
//     $(document).ready(function() {
//         $.jScrollability([
//             {
//                 'selector': '.main__back',
//                 'start': 'parent',
//                 'end': 'parent',
//                 'fn': {
//                     'left': {
//                         'start': 100,
//                         'end': 0,
//                         'unit': '%'
//                     }
//                 }
//             }
//         ]);
//     });
// })(jQuery);
