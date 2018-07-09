
var total = $('.banner .item').length;
var current = 1;

function start_banner(){

    $('.banner .item').hide();

    $('.banner .item:nth-child('+current+')').show();

    setTimeout(function(){

        $('.banner .item:nth-child('+current+')').addClass('active');

        current++;

        current = ( current <= total ) ? current : 1;

    }, 100);//time 100, pause between sliders

    setTimeout(function(){

        $('.banner .item').removeClass('active');

        setTimeout(function(){

            start_banner();

        }, 4000);// time delay to call the next banner, after the class active has been removed

    }, 10000);//time that the banner stay visible and so the class active is removed

}

window.onload = function(e){ 

    start_banner();

}