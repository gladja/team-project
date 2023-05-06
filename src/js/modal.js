// export const modalRefs = {
//   open: document.querySelector('.catalog-btn'),
//   close: document.querySelector('.modal-close-btn'),
//   backdrop: document.querySelector('.modal-backdrop'),
//   modal: document.querySelector('.modal'),
//   image: document.querySelector('.modal-img'),
//   name: document.querySelector('.modal-name'),
//   price: document.querySelector('.modal-price'),
//   column: document.querySelector('.modal-column'),
// };

// export function toggleModal() {
//   modalRefs.backdrop?.classList.toggle('backdrop-animation');
//   modalRefs.modal?.classList.toggle('modal-animation');
// }

// export function selectItem() {
//   const items = document.querySelectorAll('.catalog-item');
//   let selectedItem = null;

//   items.forEach(item => {
//     document.querySelector('.selected')?.classList.remove('selected');
//     item.classList.add('selected');
//     selectedItem = document.createElement('div');
//     selectedItem.innerHTML = item.innerHTML;
//   });

//   modalRefs.open?.addEventListener('click', () => {
//     if (!selectedItem) return;

//     modalRefs.column.innerHTML = '';
//     modalRefs.column?.appendChild(selectedItem);
//     toggleModal();
//   });
// }

// export function toggleModal() {
//   modalRefs.backdrop?.classList.toggle('backdrop-animation');
//   modalRefs.modal?.classList.toggle('modal-animation');
// }

// export function selectItem(e) {
//   const items = document.querySelectorAll('.catalog-item');
//   let selectedItem = null;
//   // @ts-ignore
//   if (selectedItem?.classList.contains('catalog-item')) {
//     selectedItem = e.target;
//     selectedItem.classList.add('selected');
//   } else return;
//   selectedItem.classList.add('selected');
// }

export const modalRefs = {
  open: document.querySelector('.catalog-btn'),
  close: document.querySelector('.modal-close-btn'),
  backdrop: document.querySelector('.modal-backdrop'),
  modal: document.querySelector('.modal'),
  image: document.querySelector('.modal-img'),
  name: document.querySelector('.modal-name'),
  price: document.querySelector('.modal-price'),
  column: document.querySelector('.modal-column'),
};

export function toggleModal() {
  modalRefs.backdrop?.classList.toggle('backdrop-animation');
  modalRefs.modal?.classList.toggle('modal-animation');
}

export function selectItem() {
  const items = document.querySelectorAll('.catalog-item');
  let selectedItem = null;

  items.forEach(item => {
    item.addEventListener('click', () => {
      document.querySelector('.selected')?.classList.remove('selected');
      item.classList.add('selected');
      selectedItem = document.createElement('div');
      selectedItem.classList.add('catalog-item');
      selectedItem.innerHTML = item.innerHTML;
    });
  });

  modalRefs.open?.addEventListener('click', () => {
    if (!selectedItem) return;

    modalRefs.column.innerHTML = '';
    modalRefs.column.appendChild(selectedItem);
    toggleModal();
  });
}

export function addEventListener() {
  const items = document.querySelectorAll('.catalog-item');
  items.forEach(item => {
    item.addEventListener('click', selectItem);
  });
}
