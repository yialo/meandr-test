'use strict';

const about = document.querySelector('.about');
const aboutButton = about.querySelector('.about__button');

const expandParagraph = function expandLastAboutParagraph() {
  about.classList.remove('is-collapsed');
};

aboutButton.addEventListener('click', () => {
  expandParagraph();
});
