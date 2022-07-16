function menu({selector, activeClass, menuSelector, menuActiveClass}) {
  const hamburger = document.querySelector(selector),
        menu = document.querySelector(menuSelector);

  hamburger.addEventListener('click', () => {
    menu.classList.toggle(menuActiveClass);
    hamburger.classList.toggle(activeClass);
  });
}

export default menu;