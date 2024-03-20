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
   
// $(function () {
//     $(".item").on({
//         click: function () {
//             $(this).find('span,p').stop(true).animate({opacity:'1'},500,'linear');
//         },
//         click:function(){
//             $(this).find('span,p').stop(true).animate({opacity:'0'},300,'linear');
//         }
//     });
// });

$(function(){

    

    $("a.item").colorbox();
    
    
    
    AOS.init();
    
    
});