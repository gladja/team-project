export const menuRefs = {
  open: document.querySelector('.btn-menu'),
  close: document.querySelector('.menu-close-btn'),
  menu: document.querySelector('.mobile-menu'),
  links: document.querySelectorAll('.menu-link'),
};
const body = document.querySelector('body');

export function toggleMenu() {
  menuRefs.menu?.classList.toggle('menu-animation');
  body?.classList.toggle('overflow-hidden');

  //? Закрытие меню при скролле на якорь
  menuRefs.links?.forEach(link => {
    link.addEventListener('click', () => {
      menuRefs.menu?.classList.remove('menu-animation');
      body?.classList.remove('overflow-hidden');
    });
  });
}
