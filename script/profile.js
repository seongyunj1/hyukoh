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