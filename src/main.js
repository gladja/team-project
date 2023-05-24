import '/js/swiper.js';
import '/js/aos.js';
import '/js/scroll.js';

import { menuRefs, toggleMenu } from '/js/mobileMenu';
menuRefs.open?.addEventListener('click', toggleMenu);
menuRefs.close?.addEventListener('click', toggleMenu);

import { modalRefs, toggleModal, catalogEventListener } from '/js/modal';
catalogEventListener();
modalRefs.close?.addEventListener('click', toggleModal);

import { modeRefs, toggleMode } from '/js/darkMode';
modeRefs.toggle.addEventListener('click', toggleMode);
modeRefs.toggleMobile.addEventListener('click', toggleMode);
