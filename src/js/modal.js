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

const selectedItem = document.createElement('div');

function selectItem(item) {
  selectedItem.innerHTML = item.innerHTML;
  selectedItem.classList.add('added-watch');
  modalRefs.column.innerHTML = '';
  modalRefs.column.appendChild(selectedItem);

  restyleSelectedItem();

  modalRefs.open?.removeAttribute('disabled');
}

function restyleSelectedItem() {
  const selectedItemRefs = {
    content: selectedItem.querySelector('.catalog-content'),
    thumb: selectedItem.querySelector('.catalog-thumb'),
    heart: selectedItem.querySelector('.catalog-heart'),
    text: selectedItem.querySelector('.catalog-description'),
  };

  selectedItemRefs.content.style.marginTop = '40px';
  selectedItemRefs.thumb.style.padding = '26px 0';
  selectedItemRefs.heart.style.display = 'none';
  selectedItemRefs.text.style.maxWidth = '276px';
}

export function toggleModal() {
  modalRefs.backdrop?.classList.toggle('backdrop-animation');
  modalRefs.modal?.classList.toggle('modal-animation');
}

export function catalogEventListener() {
  const items = document.querySelectorAll('.catalog-item');
  items.forEach(item => {
    item.addEventListener('click', e => {
      selectItem(item);
      addToFav(e);
    });
  });

  modalRefs.open?.addEventListener('click', toggleModal);
}
