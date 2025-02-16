/* globals $ */

////////// swiperの設定 //////////
const swiper = new Swiper(".swiper", {

    // 無限ループさせる
    loop: true,
    loopAdditionalSlides: 1,
    
    //始めアクティブスライドを2番目のスライドにする
    initialSlide: 1,

    // スライド数の設定
    slidesPerView: 1,
    spaceBetween: 10,

    // ブレークポイントの設定とPC版のスライド数の設定
    breakpoints: {
        768: {
            slidesPerView: 3,
            spaceBetween: 10,
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

