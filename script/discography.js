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



$(function () {
    
    $(".box").on({
        mouseover: function () {
            $(this).find('span,.TT').stop(true).animate({opacity:'1'},500,'linear');
            // $("span,p",this).stop(true).animate({ opacity: '1' })
        },
        mouseout:function(){
            $(this).find('span,.TT').stop(true).animate({opacity:'0'},300,'linear');
            // $("span,p").stop(true).animate({opacity:'0'})
        }
    });


    AOS.init();


});