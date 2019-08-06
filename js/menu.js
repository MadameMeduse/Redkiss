$(document).ready(function(){
    $(".menu").click(function(){
        $(".nav").toggleClass('open');
    });

    if(window.innerWidth <= 979)
            $(".banner > a > img").attr("src", "img/banner1_mobile.jpg");
    else
        $(".banner > a > img").attr("src", "img/banner1.jpg");

    $(window).resize(function(){
        if(window.innerWidth <= 979)
            $(".banner > a > img").attr("src", "img/banner1_mobile.jpg");
        else
            $(".banner > a > img").attr("src", "img/banner1.jpg");
    });
});