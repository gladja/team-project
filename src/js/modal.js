export const modalRefs = {
  open: document.querySelector('.catalog-btn'),
  close: document.querySelector('.modal-close-btn'),
  backdrop: document.querySelector('.modal-backdrop'),
  modal: document.querySelector('.modal'),
  column: document.querySelector('.first-column'),
};

export const catalogRefs = {
  list: document.querySelector('.catalog-list'),
  items: document.querySelectorAll('.catalog-item'),
  requireText: document.querySelector('.catalog-require'),
};

// //? Выбор элемента из списка часов и вставка в модалку
export function selectItem(item) {
  const selected = document.querySelector('.selected');
  if (selected) {
    selected.classList.remove('selected');
  }
  item.classList.add('selected');

  const selectedItem = document.createElement('div');
  selectedItem.innerHTML = item.innerHTML;
  selectedItem.classList.add('added-watch');
  // @ts-ignore
  modalRefs.column.innerHTML = '';
  // @ts-ignore
  modalRefs.column.appendChild(selectedItem);

  const itemContent = selectedItem.querySelector('.catalog-content');
  const itemThumb = selectedItem.querySelector('.catalog-thumb');
  // @ts-ignore
  itemThumb.style.padding = '26px 0';
  // @ts-ignore
  itemContent.style.marginTop = '40px';

  // @ts-ignore
  modalRefs.open?.removeAttribute('disabled');
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
    item.addEventListener('click', () => {
      selectItem(item);
    });
  });

  modalRefs.open?.addEventListener('click', toggleModal);
}
