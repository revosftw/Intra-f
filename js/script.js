init = function(){
    // $(window).scrollTop(0);
    var h=$(window).height();
    $('#top').css('height',h);
    $('#hidden_menu').hide();
    $('.circle').height($('.circle').width());
    console.log($('.circle').height());
    console.log($('.circle').width());

    function scrollNav() {
      $('#nav-menu a').click(function(){
        var a=document.getElementsByClassName('active');
        var b=a[0];
        $(b).removeClass("active");
        $(this).closest('li').addClass("active");
        $('html, body').stop().animate({
            scrollTop: $( $(this).attr('href') ).offset().top
        }, 1600);
        return false;
      });
      $('.scrollTop a').scrollTop();
    }
    scrollNav();

    $('#menu_btn').click(function(){
        console.log('click');
        if($(this).hasClass('open')){
            console.log('if');
            $('#hidden_menu').hide();
            $(this).removeClass('open');
            $(this).html('<i class="fa fa-bars"></i>');
        }
        else{
            console.log('else');
            $('#hidden_menu').show();
            $(this).addClass('open');
            $(this).html('<i class="fa fa-minus"></i>');
        }

    });
}
