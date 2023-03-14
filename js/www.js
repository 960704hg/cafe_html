$(function () {

    $('.mainSlide').slick({
        //arrows: false,
        dots: true,
    });

    $('.main_pro_slide').slick({
        arrows: false,
        slidesToShow: 5,
    });

    $('.snk .arrows .next').on('click', function () {
        $('.main_pro_slide').slick('slickNext')
    })


    $('.snk .arrows .prev').on('click', function () {
        $('.main_pro_slide').slick('slickPrev')
    })
})