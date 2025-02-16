/* globals $ */

////////// swiperの設定 //////////
const swiper = new Swiper(".swiper", {

    // スライド数の設定
    slidesPerView: 1,
    spaceBetween: 10,

    //無限ループさせる
    loop: true,
    loopAdditionalSlides: 1,

    //スライド数が不足している時でもページネーションを表示する
    watchOverflow: false,

    // ブレークポイントの設定とPC版のスライド数の設
    breakpoints: {
        768: {
        slidesPerView: 3,
        spaceBetween: 10,
        },
    },

  // ページネーションの設定
    pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
    },
});
