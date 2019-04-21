'use strict';

const bodyMain = document.querySelector('.body-main');
const aboutBlock = bodyMain.querySelector('.body-main__nest--about');
const advantagesBlock = bodyMain.querySelector('.body-main__nest--advantages');
const feedbackBlock = bodyMain.querySelector('.body-main__nest--feedback');

const checkOffsetTop = function checkOffsetTopOfBlock(section) {
  const scrollShift = window.innerHeight;
  const scrolledTop = document.documentElement.scrollTop;
  if (scrolledTop >= section.offsetTop - scrollShift) {
    section.classList.add('animatecss-fadeinup');
  } else {
    section.classList.remove('animatecss-fadeinup');
  }
};

window.addEventListener('scroll', () => {
  checkOffsetTop(aboutBlock);
  checkOffsetTop(advantagesBlock);
  checkOffsetTop(feedbackBlock);
});
