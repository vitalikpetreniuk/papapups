$(function () {
    if($('.hs-items').length){
        $('.hs-items').slick({
            slidesToShow: 1,
            centerMode: true,
            centerPadding: '430px',
            // autoplay: true,
            autoplaySpeed: 1600,
            infinite: true,
            dots: true
        });
    }
    if($('.comments-slider').length){
        $('.comments-slider').slick({
            slidesToShow: 1,
            // autoplay: true,
            autoplaySpeed: 1600,
            infinite: true
        });
    }
    if($('.btn-product').length){
        $('.btn-product').on('click', function (e) {
            e.preventDefault();
            $('.btn-product').removeClass('active');
            $('.btn-product').siblings().removeClass('active');
            $(this).addClass('active');
            $(this).siblings().addClass('active');
        });
    }
    $('.btn-tab').on('click', function (e) {
        e.preventDefault();
        $('.tab-content.active').removeClass('active').siblings('.tab-content').addClass('active');
        $(this).removeClass('not-active');
        $(this).siblings().addClass('not-active');
    });

    $(".paralax").paroller({ factor: '0.3', type: 'foreground', direction: 'horizontal' });

    $(function() {
        ($('.minus')).click(function() {
            var q = $('.num');
            var data = $(q).val();
            if(data > 0) {
                $(q).val(parseInt(data) - 1);
            }
            return false
        });
        ($('.plus')).click(function() {
            var q = $('.num');
            var data = $(q).val();
            $(q).val(parseInt(data) + 1);
            return false
        });
    });
    $(function() {
        $('input, select').styler();
    });
});