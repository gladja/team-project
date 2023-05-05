// Mobile menu
// @ts-ignore
import { menuRefs } from '/js/mobileMenu';
// @ts-ignore
import { toggleMenu } from '/js/mobileMenu';

menuRefs.open?.addEventListener('click', toggleMenu);
menuRefs.close?.addEventListener('click', toggleMenu);
