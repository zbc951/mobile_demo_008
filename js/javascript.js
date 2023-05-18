//swiper
$(function(){
    var swiper = new Swiper('.swiper', {
        loop: true,
        autoHeight: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    var swiper_hotGame = new Swiper('.swiper_hotGame', {
        loop: true,
        slidesPerView: 4,
        spaceBetween: 20,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
    });

    var swiper_gameType = new Swiper('.swiper_gameType', {
        freeMode: true,
        slidesPerView: "auto",
        spaceBetween: 20,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    var swiper_partner = new Swiper('.swiper_partner', {
        loop: true,
        freeMode: true,
        slidesPerView: "auto",
        spaceBetween: 20,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
    });
})