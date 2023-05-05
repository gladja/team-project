export const menuRefs = {
  open: document.querySelector('.btn-menu'),
  close: document.querySelector('.menu-close-btn'),
  menu: document.querySelector('.mobile-menu'),
};

export function toggleMenu() {
  menuRefs.menu?.classList.toggle('menu-animation');
}
