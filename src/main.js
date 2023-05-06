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
import { selectItem } from '/js/modal';
// @ts-ignore
import { addEventListener } from '/js/modal';

addEventListener();

modalRefs.open?.addEventListener('click', toggleModal);
modalRefs.close?.addEventListener('click', toggleModal);
