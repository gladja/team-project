export const modalRefs = {
  open: document.querySelector('.catalog-btn'),
  close: document.querySelector('.modal-close-btn'),
  backdrop: document.querySelector('.modal-backdrop'),
  modal: document.querySelector('.modal'),
  column: document.querySelector('.first-column'),
};

export const catalogRefs = {
  items: document.querySelectorAll('.catalog-item'),
  requireText: document.querySelector('.catalog-require'),
};

//? Выбор элемента из списка часов и вставка в модалку
export function selectItem() {
  const items = document.querySelectorAll('.catalog-item');
  let selectedItem = null;

  items.forEach(item => {
    item.addEventListener('click', () => {
      document.querySelector('.selected')?.classList.remove('selected');
      item.classList.add('selected');
      selectedItem = document.createElement('div');
      selectedItem.innerHTML = item.innerHTML;
      selectedItem.classList.add('modal-column');
      // @ts-ignore
      modalRefs.open?.removeAttribute('disabled');
      // @ts-ignore
      document.querySelector('.catalog-require').style.opacity = '0';
    });
  });

  modalRefs.open?.addEventListener('click', () => {
    if (selectedItem === null) return;

    // @ts-ignore
    modalRefs.column.innerHTML = '';
    // @ts-ignore
    modalRefs.column.appendChild(selectedItem);
    toggleModal();
  });
}

//? Открыть/Закрыть модалку
export function toggleModal() {
  modalRefs.backdrop?.classList.toggle('backdrop-animation');
  modalRefs.modal?.classList.toggle('modal-animation');
}

//? Добавляет обработчик события на каждый элемент списка при  загрузке страницы
export function addEventListener() {
  const items = document.querySelectorAll('.catalog-item');
  items.forEach(item => {
    item.addEventListener('click', selectItem);
  });
}
