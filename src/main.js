import '/js/swiper.js';
import '/js/aos.js';
import '/js/scroll.js';

import { menuRefs, toggleMenu, menuEventListeners } from '/js/mobileMenu';

const { open: menuOpen, close: menuClose } = menuRefs;

menuEventListeners();

menuOpen?.addEventListener('click', toggleMenu);
menuClose?.addEventListener('click', toggleMenu);

import { modalRefs, toggleModal, catalogEventListener } from '/js/modal';

const { open: modalOpen, close: modalClose } = modalRefs;

catalogEventListener();
modalOpen.addEventListener('click', toggleModal);
modalClose?.addEventListener('click', toggleModal);

import { modeRefs, toggleMode } from '/js/darkMode';

const { toggle, toggleMobile } = modeRefs;

toggle.addEventListener('click', toggleMode);
toggleMobile.addEventListener('click', toggleMode);
