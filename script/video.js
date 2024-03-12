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
