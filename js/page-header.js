
var pageHeader = document.querySelector('.page-header');
var itemToggle = document.querySelector('.main-nav__item--toggle');
var linkToggle = document.querySelector('.main-nav__link--toggle');


pageHeader.classList.remove('page-header--no-js');
pageHeader.classList.add('page-header--menu-closed');
itemToggle.classList.remove('main-nav__item--toggle-close');
itemToggle.classList.add('main-nav__item--toggle-open');

linkToggle.addEventListener('click', function(event) {
  event.preventDefault();
  if (itemToggle.classList.contains('main-nav__item--toggle-open')) {
    itemToggle.classList.remove('main-nav__item--toggle-open');
    itemToggle.classList.add('main-nav__item--toggle-close');
    pageHeader.classList.remove('page-header--menu-closed');
  } else {
    itemToggle.classList.remove('main-nav__item--toggle-close');
    itemToggle.classList.add('main-nav__item--toggle-open');
    pageHeader.classList.add('page-header--menu-closed');
  }
});
