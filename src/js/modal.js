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

function addToFav(e) {
  const selectedHeart = e.target
    .closest('.catalog-item')
    .querySelector('.catalog-heart');
  if (selectedHeart) {
    const hearts = document.querySelectorAll('.catalog-heart');
    hearts.forEach(heart => {
      if (heart === selectedHeart) {
        heart.classList.add('selected-heart');
        heart.classList.add('animate__bounceIn');
      } else {
        heart.classList.remove('selected-heart');
        heart.classList.remove('animate__bounceIn');
      }
    });
  }
}

function selectItem(item) {
  const selectedItem = document.createElement('div');
  selectedItem.innerHTML = item.innerHTML;
  selectedItem.classList.add('added-watch');
  modalRefs.column.innerHTML = '';
  modalRefs.column.appendChild(selectedItem);

  const itemContent = selectedItem.querySelector('.catalog-content');
  const itemThumb = selectedItem.querySelector('.catalog-thumb');
  const itemHeart = selectedItem.querySelector('.catalog-heart');
  itemThumb.style.padding = '26px 0';
  itemContent.style.marginTop = '40px';
  itemHeart.style.display = 'none';

  modalRefs.open?.removeAttribute('disabled');
}

export function toggleModal() {
  modalRefs.backdrop?.classList.toggle('backdrop-animation');
  modalRefs.modal?.classList.toggle('modal-animation');
}

export function addEventListener() {
  const items = document.querySelectorAll('.catalog-item');
  items.forEach(item => {
    item.addEventListener('click', e => {
      selectItem(item);
      addToFav(e);
    });
  });

  modalRefs.open?.addEventListener('click', toggleModal);
}
