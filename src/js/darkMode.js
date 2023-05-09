export const modeRefs = {
  toggle: document.querySelector('.mode-btn'),
  toggleMobile: document.querySelector('.mode-btn-mobile'),
  circle: document.querySelector('.btn-circle'),
  circleMobile: document.querySelector('.btn-circle-mobile'),
  bg: document.querySelectorAll('.mode-bg'),
  bgSecondary: document.querySelector('.mode-bg-secondary'),
  text: document.querySelectorAll('.mode-text'),
  title: document.querySelectorAll('.mode-title'),
  semiTrText: document.querySelectorAll('.mode-semi-tr'),
  icon: document.querySelector('.mode-icon'),
  input: document.querySelectorAll('.mode-input'),
  footer: document.querySelector('.mode-footer'),
};
const colors = {
  white: '#fff',
  black: '#141414',
  green: '#1e2827',
  semiTr: 'rgba(20, 20, 20, .5)',
  bgColor: '#fbfbfb',
  gray: '#ffffff80',
};

let toggled = false;

export function toggleMode() {
  const toggles = [modeRefs.toggle, modeRefs.toggleMobile];
  const circles = [modeRefs.circle, modeRefs.circleMobile];
  toggles.forEach(toggle => {
    if (toggle) {
      toggle?.classList.toggle('toggled-btn');
    }
  });
  circles.forEach(circle => {
    if (circle) {
      circle?.classList.toggle('toggled-circle');
    }
  });

  if (!toggled) {
    modeRefs.bg.forEach(item => {
      item.style.backgroundColor = colors.black;
    });
    modeRefs.bgSecondary.style.backgroundColor = colors.black;

    [
      modeRefs.text,
      modeRefs.title,
      modeRefs.semiTrText,
      modeRefs.input,
    ].forEach(group => {
      group.forEach(item => {
        item.style.color = colors.white;
      });
    });

    modeRefs.input.forEach(item => {
      item.style.backgroundColor = colors.gray;
      item.style.borderColor = colors.white;
    });

    modeRefs.footer.style.backgroundColor = colors.black;
    modeRefs.footer.style.borderColor = 'gray';
    modeRefs.icon.style.stroke = colors.white;

    toggled = true;
  } else {
    modeRefs.bg.forEach(item => {
      item.style.backgroundColor = colors.bgColor;
    });
    modeRefs.bgSecondary.style.backgroundColor = colors.white;

    [modeRefs.text, modeRefs.input].forEach(group => {
      group.forEach(item => {
        item.style.color = colors.black;
      });
    });

    modeRefs.title.forEach(item => {
      item.style.color = colors.green;
    });

    modeRefs.semiTrText.forEach(item => {
      item.style.color = colors.semiTr;
    });

    modeRefs.input.forEach(item => {
      item.style.backgroundColor = 'transparent';
      item.style.borderColor = colors.semiTr;
    });

    modeRefs.footer.style.backgroundColor = colors.green;
    modeRefs.footer.style.borderColor = 'transparent';
    modeRefs.icon.style.stroke = colors.black;

    toggled = false;
  }
}
