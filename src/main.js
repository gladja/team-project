import '/js/swiper.js';
import '/js/aos.js';
import '/js/scroll.js';

import { menuRefs } from '/js/mobileMenu';
import { toggleMenu } from '/js/mobileMenu';
menuRefs.open?.addEventListener('click', toggleMenu);
menuRefs.close?.addEventListener('click', toggleMenu);

import { modalRefs } from '/js/modal';
import { toggleModal } from '/js/modal';
import { addEventListener } from '/js/modal';
addEventListener();
modalRefs.close?.addEventListener('click', toggleModal);

import { modeRefs } from '/js/darkMode';
import { toggleMode } from '/js/darkMode';
modeRefs.toggle.addEventListener('click', toggleMode);
modeRefs.toggleMobile.addEventListener('click', toggleMode);
