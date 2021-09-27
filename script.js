
$(document).ready(function(){
    $("#menu-bar").click(function(){
        $(this).toggleClass("fa-toggle");
        $(".navbar").toggleClass("nav-toggle");
    });

    $('.list .btn').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        let src = $(this).attr('data-src');
        $('.collection .row .image img').attr('src',src);
    });

    $(".here").click(function(){
      $(".left").fadeIn();
    });

});
