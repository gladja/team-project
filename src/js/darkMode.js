export const modeRefs = {
  toggle: document.querySelector('.mode-btn'),
  toggleMobile: document.querySelector('.mode-btn-mobile'),
  circle: document.querySelector('.btn-circle'),
  circleMobile: document.querySelector('.btn-circle-mobile'),
  backgrounds: document.querySelectorAll('.js-mode-bg'),
  texts: document.querySelectorAll('.js-mode-text'),
  icon: document.querySelector('.js-mode-icon'),
  inputs: document.querySelectorAll('.js-mode-input'),
  footer: document.querySelector('.js-mode-footer'),
};

const toggleBackground = ({ backgrounds } = modeRefs) => {
  backgrounds.forEach(bg => {
    bg.classList.toggle('darkmode-bg');
  });
};

const toggleText = ({ texts } = modeRefs) => {
  texts.forEach(text => {
    text.classList.toggle('darkmode-text');
  });
};

const toggleInputs = ({ inputs } = modeRefs) => {
  inputs.forEach(input => {
    input.classList.toggle('darkmode-input');
  });
};

const toggleIcons = ({ icon } = modeRefs) => {
  icon?.classList.toggle('darkmode-icon');
};

const toggleFooter = ({ footer } = modeRefs) => {
  footer?.classList.toggle('darkmode-footer');
};

export const toggleMode = () => {
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
};
