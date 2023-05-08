import '/js/swiper.js';
import '/js/aos.js';
import '/js/scroll.js';

// Mobile menu
// @ts-ignore
import { menuRefs } from '/js/mobileMenu';
// @ts-ignore
import { toggleMenu } from '/js/mobileMenu';

menuRefs.open?.addEventListener('click', toggleMenu);
menuRefs.close?.addEventListener('click', toggleMenu);

// Modal
// @ts-ignore
import { modalRefs } from '/js/modal';
// @ts-ignore
import { toggleModal } from '/js/modal';
// @ts-ignore
import { addEventListener } from '/js/modal';

// //? Добавляет обработчик события на каждый элемент каталога при  загрузке страницы
addEventListener();

//? Обработчик события на крестик
modalRefs.close?.addEventListener('click', toggleModal);

// Dark mode @ts-ignore
// @ts-ignore
import { modeRefs } from '/js/darkMode';
// @ts-ignore
import { toggleMode } from '/js/darkMode';

modeRefs.toggle.addEventListener('click', toggleMode);
modeRefs.toggleMobile.addEventListener('click', toggleMode);
