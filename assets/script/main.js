/* globals $ */

////////// swiperの設定 //////////
const swiper = new Swiper(".swiper", {

    // 無限ループOFFの設定
    loop: false,

    //開始スライドの選定(2枚目のスライドからスタート)
    initialSlide: 1,

    // SP版スライド数の設定
    slidesPerView: 1,

    // スライド間の余白の設定
    spaceBetween: 15,

    // ブレークポイントの設定（PC版の設定）
    breakpoints: {
        768: {
            slidesPerView: 3, // PC版のスライド数
        },
    },

    // ページネーションの設定
    pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
    },
});

