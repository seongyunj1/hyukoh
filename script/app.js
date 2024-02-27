let tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.logo',
        start: '0%',
        end: '80%',
        scrub: 1
    },
});
let tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: '.logo',
        start: '0%',
        end: '60%',
        scrub: 1
    },
});

let tl4 = gsap.timeline({
    scrollTrigger: {
        trigger: '.logo',
        start: '0%',
        end: '200%',
        scrub: 1,
    },
});

// tl.fromTo('.sliding-text',{y:0},{y:-400});

tl2.fromTo('.logo', { scale: 8 },
    { scale: 1, top: "1rem", left: "1rem", x: "120%", y: "60%" });


// let tl3 = gsap.timeline({
//     scrollTrigger:{
//         trigger: '.logo',
//         start: '0%',
//         end: '200%',
//         scrub: 1 ,
//         pin: true,
//         pinSpacing:false,
//     },
// });

//로고 효과



$(function () {
    $(".allslide").slick();
    $(".allbox").slick({
        centerMode: true,
        centerPadding: '10px',
        slidesToShow: 3
    });

});





