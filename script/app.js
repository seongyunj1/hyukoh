

let tl = gsap.timeline({
    scrollTrigger: {
        trigger: '#menu',
        start: '0%',
        end: '60%',
        scrub: 1
    },
});
let tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: '#menu',
        start: '0%',
        end: '80%',
        scrub: 1
    },
});

let tl4 = gsap.timeline({
    scrollTrigger: {
        trigger: '#menu',
        start: '0%',
        end: '100%',
        scrub: 1,
    },
});


tl2.fromTo('.logo', { scale: 6 },
    { scale: 1, top: "45%", left: "5%", x: "50%", y: "50%" });



let tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: '#menu',
        start: '0%',
        end: '10000%',
        scrub: 1,
        pin: true,
        pinSpacing: false,
    },
});

/////////////////////


$(function(){
$(".allslide").slick({})
});
// $(".Mslide").slick({
//     centerMode: true,
//     centerPadding: '10px',
//     slidesToShow: 1,
// })
// });


////////////////////////////////


$(function () {
    $(".allbox").slick({
        centerMode: true,
        centerPadding: '10px',
        slidesToShow: 3,
        responsive: [
            {
              breakpoint: 770,
              settings: {
                slidesToShow: 1,
                infinite: true,
              }
            }
        
          ]
    });

});
////////////////////////////////

// $(function(){
//     $(".slick-slide .cover img").on({
//         mouseover:function(){
//             $(".slick-center .LP img").css({
//                 'transform':'rotate(90deg)'
                
//             })
//         }
//     })
// });




//////////////////


$(function () {

    $("#menu .menuB").on({
        click: function () {
            $("header").on().css({display:'block'});
            $(".closeB").stop(true).show();
            $(".menuB").stop(true).hide();
        }
    });



    $(".closeB").on({
        click: function () {
            $("header").on().css({display:'none'});
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




