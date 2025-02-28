/* globals $ */

////////// swiperの設定 //////////
const swiper = new Swiper(".swiper", {

    // 無限ループの設定
    loop: false,
    
    //開始スライドの選定
    initialSlide: 1,

    // スライド数の設定
    slidesPerView: 1,
    spaceBetween: 16,

    // ブレークポイントの設定とPC版のスライド数の設定
    breakpoints: {
        768: {
            slidesPerView: 3,
            spaceBetween: 16,
        },
    },

    // スライド数が不足している時でもページネーションを表示する
    watchOverflow: false,

    // ページネーションの設定
    pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
    },
});

