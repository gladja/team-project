export const menuRefs = {
  open: document.querySelector('.btn-menu'),
  close: document.querySelector('.menu-close-btn'),
  menu: document.querySelector('.mobile-menu'),
  links: document.querySelectorAll('.menu-link'),
};
const body = document.body;

const { open, close, menu, links } = menuRefs;

export const toggleMenu = () => {
  menu?.classList.toggle('menu-animation');
  body?.classList.toggle('overflow-hidden');
};

export const menuEventListeners = () => {
  links.forEach(link => {
    link.addEventListener('click', () => {
      menu?.classList.remove('menu-animation');
      body?.classList.remove('overflow-hidden');
    });
  });
};
