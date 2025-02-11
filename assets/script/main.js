/* globals $ */

////////// swiperの設定 //////////
const swiper = new Swiper(".swiper", {
    oop: true,

    // スライド数の設定
    slidesPerView: 1,
    spaceBetween: 10,

    // ブレークポイントの設定とPC版のスライド数の設
    breakpoints: {
        768: {
        slidesPerView: 3,
        spaceBetween: 40,
        },
    },

    // ナビゲーションボタンの設定
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

  // ページネーションの設定
    pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
    },
});
