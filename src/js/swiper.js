new Swiper('.swiper', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        768: {
            enabled: false,
            off() {
                swiper.destroy(true);
            }
        }
    },
    observer: true,
})