import '../scss/style.scss';
import './openCloseBrands';
import './openCloseRepair';
import './mainContent';
import './modal';
import './saidbar';


import Swiper, { Pagination } from 'swiper';
Swiper.use([Pagination]);

const swiper = new Swiper('.swiper', {
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
 