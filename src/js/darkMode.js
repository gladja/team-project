export const modeRefs = {
  toggle: document.querySelector('.mode-btn'),
  toggleMobile: document.querySelector('.mode-btn-mobile'),
  circle: document.querySelector('.btn-circle'),
  circleMobile: document.querySelector('.btn-circle-mobile'),
  backgrounds: document.querySelectorAll('.js-mode-bg'),
  bgSecondary: document.querySelector('.js-mode-bg-secondary'),
  texts: document.querySelectorAll('.js-mode-text'),
  icon: document.querySelector('.js-mode-icon'),
  inputs: document.querySelectorAll('.js-mode-input'),
  footer: document.querySelector('.js-mode-footer'),
};

export function toggleMode() {
  const toggles = [modeRefs.toggle, modeRefs.toggleMobile];
  const circles = [modeRefs.circle, modeRefs.circleMobile];

  toggles.forEach(toggle => {
    toggle?.classList.toggle('toggled-btn');
  });

  circles.forEach(circle => {
    circle?.classList.toggle('toggled-circle');
  });

  toggleBackground();
  toggleText();
  toggleInputs();
  toggleIcons();
  toggleFooter();
}

function toggleBackground() {
  const { backgrounds, bgSecondary } = modeRefs;

  backgrounds.forEach(bg => {
    bg.classList.toggle('darkmode-bg');
  });

  bgSecondary?.classList.toggle('darkmode-bg');
}

function toggleText() {
  const { texts } = modeRefs;

  texts.forEach(text => {
    text.classList.toggle('darkmode-text');
  });
}

function toggleInputs() {
  const { inputs } = modeRefs;

  inputs.forEach(input => {
    input.classList.toggle('darkmode-input');
  });
}

function toggleIcons() {
  const { icon } = modeRefs;

  icon?.classList.toggle('darkmode-icon');
}

function toggleFooter() {
  const { footer } = modeRefs;

  footer?.classList.toggle('darkmode-footer');
}
