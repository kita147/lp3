/* globals $ */

////////// swiperの設定 //////////
const swiper = new Swiper(".swiper", {
    oop: true,

    // スライド数の設定
    slidesPerView: 1,
    spaceBetween: 16,

    //無限ループさせる
    loop: true,
    loopAdditionalSlides: 1,

    // ブレークポイントの設定とPC版のスライド数の設
    breakpoints: {
        768: {
        slidesPerView: 3,
        spaceBetween: 40,
        },
    },

  // ページネーションの設定
    pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
    },
});
