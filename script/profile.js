
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




    //////////////////////////////////



    $(window).scroll(function () {
        if ($(this).scrollTop() > 800) {
            $(".topbtn").fadeIn();
        } else {
            $(".topbtn").fadeOut();
        }
    
    });
    
    $('.topbtn').click(function () {
        $('html,body').animate({scrollTop:0}, 100);
        return false;
    });

    ////////////////////////


    
    AOS.init();

});






