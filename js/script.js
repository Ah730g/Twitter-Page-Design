let navbar = document.querySelector('.navbar');
let wholePageHeight = window.document.body.scrollHeight - window.innerHeight;

//Tab Section
let tabs = document.querySelectorAll('.list li');
let contnents = document.querySelectorAll('.content');

window.onscroll = function () {
  if (window.scrollY >= navbar.offsetHeight) {
    if (!navbar.classList.contains('scrolled'))
      navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  if (wholePageHeight == Math.floor(window.scrollY))
    navbar.classList.remove('scrolled');
};

//Tabs Implementation
function removeActiveClass() {
  tabs.forEach((tab) => {
    tab.classList.remove('active');
  });
}
tabs.forEach((tab) => {
  tab.addEventListener('click', (e) => {
    removeActiveClass();
    e.currentTarget.classList.add('active');
    displayContent(e.currentTarget.dataset.tab);
  });
});
function displayContent(dataContnet) {
  contnents.forEach((Element) => {
    Element.classList.add('d-none');
  });
  document.querySelector(dataContnet).classList.remove('d-none');
  console.log(document.querySelector(dataContnet));
}
