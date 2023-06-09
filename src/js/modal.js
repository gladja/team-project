export const modalRefs = {
  open: document.querySelector('.catalog-btn'),
  close: document.querySelector('.modal-close-btn'),
  backdrop: document.querySelector('.modal-backdrop'),
  modal: document.querySelector('.modal'),
  column: document.querySelector('.first-column'),
};

const selectedItem = document.createElement('div');

const addHeart = e => {
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
};

const restyleSelectedItem = () => {
  const selectedItemRefs = {
    content: selectedItem.querySelector('.catalog-content'),
    thumb: selectedItem.querySelector('.catalog-thumb'),
    heart: selectedItem.querySelector('.catalog-heart'),
    text: selectedItem.querySelector('.catalog-description'),
  };

  const { content, thumb, heart, text } = selectedItemRefs;

  content.style.marginTop = '40px';
  thumb.style.padding = '26px 0';
  heart.style.display = 'none';
  text.style.maxWidth = '276px';
};

const selectItem = item => {
  const { open, column } = modalRefs;

  selectedItem.innerHTML = item.innerHTML;
  selectedItem.classList.add('added-watch');
  column.innerHTML = '';
  column.appendChild(selectedItem);

  restyleSelectedItem();

  open?.removeAttribute('disabled');
};

export const toggleModal = () => {
  const { backdrop, modal } = modalRefs;

  backdrop?.classList.toggle('backdrop-animation');
  modal?.classList.toggle('modal-animation');
};

export const catalogEventListener = () => {
  const items = document.querySelectorAll('.catalog-item');

  items.forEach(item => {
    item.addEventListener('click', e => {
      selectItem(item);
      addHeart(e);
    });
  });
};
