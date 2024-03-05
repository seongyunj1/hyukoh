

let tl = gsap.timeline({
    scrollTrigger:{
        trigger: '#menu',
        start: '0%',
        end: '60%',
        scrub: 1 
    },
});
let tl2 = gsap.timeline({
    scrollTrigger:{
        trigger: '#menu',
        start: '0%',
        end: '80%',
        scrub: 1 
    },
});

let tl4 = gsap.timeline({
    scrollTrigger:{
        trigger: '#menu',
        start: '0%',
        end: '100%',
        scrub: 1 ,
    },
});


tl2.fromTo('.logo',{scale:6},
{scale:1, top:"4%", left:"5%", x:"50%", y:"50%"});



let tl3 = gsap.timeline({
    scrollTrigger:{
        trigger: '#menu',
        start: '0%',
        end: '10000%',
        scrub: 1 ,
        pin: true,
        pinSpacing:false,
    },
});




////////////////////////////////


$(function () {
    $(".allslide").slick();
    $(".allbox").slick({
        centerMode: true,
        centerPadding: '10px',
        slidesToShow: 3
    });

});
////////////////////////////////


$(function(){
  
    $(".menuB").on({
        click:function(){
            $("header").stop(true).slideDown('fast');
            $(".closeB").stop(true).show();
            $(".menuB").stop(true).hide();
        }
    });

    $(".closeB").on({
        click:function(){
            $("header").stop(true).slideUp('fast');
            $(".closeB").stop(true).hide();
            $(".menuB").stop(true).show();
        }
    })
});


///////////////////////

$(window).scroll(function () {
    if ($(this).scrollTop() > 1000) {
        $(".topbtn").fadeIn();
    } else {
        $(".topbtn").fadeOut();
    }

});

$('.topbtn').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 400);
    return false;
});


////////////////////




