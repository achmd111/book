const pages = document.querySelectorAll('.page');

pages.forEach(page => {
  page.addEventListener('click', () => {
    page.style.transform = 'rotateY(180deg)';
  });
});
