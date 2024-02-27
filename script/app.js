let tl = gsap.timeline({
    scrollTrigger:{
        trigger: '.menu',
        start: '0%',
        end: '80%',
        scrub: 1 
    },
});
let tl2 = gsap.timeline({
    scrollTrigger:{
        trigger: '.menu',
        start: '0%',
        end: '60%',
        scrub: 1 
    },
});

let tl4 = gsap.timeline({
    scrollTrigger:{
        trigger: '.menu',
        start: '0%',
        end: '200%',
        scrub: 1 ,
    },
});

//글자슬라이드 효과


tl.fromTo('.sliding-text',{y:0},{y:-400});

tl2.fromTo('.logo',{scale:8},
{scale:1, top:"1rem", left:"1rem", x:"140%", y:"60%"});


let tl3 = gsap.timeline({
    scrollTrigger:{
        trigger: '.menu',
        start: '0%',
        end: '200%',
        scrub: 1 ,
        pin: true,
        pinSpacing:false,
    },
});

//로고 효과

$(document).ready(()=>{


$('#slide').slick({

        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
      
});

});
