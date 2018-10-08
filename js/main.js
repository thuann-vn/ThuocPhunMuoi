$(document).ready(function() {
    var owl = $('.owl-carousel');
    owl.each(function() {
        $(this).owlCarousel({
            margin: 30,
            nav: true,
            loop: true,
            items: 3,
            center:  $(this).data('center')==1?true:false,
            navText: ['<span class="fa fa-caret-left"></span>', '<span class="fa fa-caret-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
            }
        })
    });

    $(window).on('scroll', function(){
        if($(window).scrollTop()>0){
            $('.site-header').addClass('sticky');
        }else{
            $('.site-header').removeClass('sticky');
        }
    });
})