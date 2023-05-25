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
  darkGray: 'gray',
  transparent: 'transparent',
};

let toggled = false;

export function toggleMode() {
  const toggles = [modeRefs.toggle, modeRefs.toggleMobile];
  const circles = [modeRefs.circle, modeRefs.circleMobile];

  toggles.forEach(toggle => {
    toggle?.classList.toggle('toggled-btn');
  });

  circles.forEach(circle => {
    circle?.classList.toggle('toggled-circle');
  });

  if (!toggled) {
    toggleBackground(colors.black, colors.black);
    toggleText(colors.white);
    toggleTitles(colors.white);
    toggleSemiTrText(colors.white);
    toggleIcons(colors.white);
    toggleInputs(colors.white, colors.gray, colors.white);
    toggleFooter(colors.black, colors.darkGray);

    toggled = true;
  } else {
    toggleBackground(colors.bgColor, colors.white);
    toggleText(colors.black);
    toggleIcons(colors.black);
    toggleTitles(colors.green);
    toggleSemiTrText(colors.semiTr);
    toggleInputs(colors.black, colors.white, colors.semiTr);
    toggleFooter(colors.green, colors.transparent);

    toggled = false;
  }
}

function toggleBackground(color1, color2) {
  modeRefs.bg.forEach(item => {
    item.style.backgroundColor = color1;
  });
  modeRefs.bgSecondary.style.backgroundColor = color2;
}

function toggleText(color1, color2) {
  modeRefs.text.forEach(item => {
    item.style.color = color1;
  });
}

function toggleTitles(color1, color2) {
  modeRefs.title.forEach(item => {
    item.style.color = color1;
  });
}

function toggleSemiTrText(color1, color2) {
  modeRefs.semiTrText.forEach(item => {
    item.style.color = color1;
  });
}

function toggleInputs(color1, color2, color3) {
  modeRefs.input.forEach(item => {
    item.style.color = color1;
    item.style.backgroundColor = color2;
    item.style.borderColor = color3;
  });
}

function toggleIcons(color1, color2) {
  modeRefs.icon.style.stroke = color1;
}

function toggleFooter(color1, color2) {
  modeRefs.footer.style.backgroundColor = color1;
  modeRefs.footer.style.borderColor = color2;
}
