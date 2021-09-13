// Change navbar style when sticky using Intersection Observer API
const header = document.querySelector('body > header');
const observer = new IntersectionObserver(
  ([e]) => {
    e.target.classList.toggle('shadow-md', e.intersectionRatio < 1);
    if (e.intersectionRatio < 1) {
      e.target.classList.add('sm:py-2');
    } else {
      e.target.classList.remove('sm:py-2');
    }
  },
  { threshold: [1] },
);

observer.observe(header);

// Hamburger menu
const menu = document.querySelector('nav[aria-label="Main navigation"]');
const menuList = document.querySelector(
  'nav[aria-label="Main navigation"] > ul',
);
const menuButton = document.querySelector(
  'button[aria-controls="main-navigation"]',
);
const openMenuButton = document.querySelector(
  'button[aria-controls="main-navigation"] svg[aria-label="Open menu button"]',
);
const closeMenuButton = document.querySelector(
  'button[aria-controls="main-navigation"] svg[aria-label="Close menu button"]',
);
const closeMenuArea = document.querySelector(
  'nav[aria-label="Main navigation"] > div',
);
let isMenuOpen = false;

function toggleMenu() {
  ['transform', 'translate-x-0'].forEach((val) => menu.classList.toggle(val));
  document.querySelector('body').classList.toggle('overflow-hidden');
  ['fixed', 'z-40', 'left-4', 'top-3'].forEach((val) =>
    menuButton.classList.toggle(val),
  );

  isMenuOpen = !isMenuOpen;

  if (isMenuOpen) {
    menuList.classList.remove('hidden');
    menuList.classList.add('flex');
    openMenuButton.classList.remove('block');
    openMenuButton.classList.add('hidden');
    closeMenuButton.classList.remove('hidden');
    closeMenuButton.classList.add('block');
    menuButton.setAttribute('aria-expanded', true);
  } else {
    menuList.classList.add('hidden');
    menuList.classList.remove('flex');
    openMenuButton.classList.add('block');
    openMenuButton.classList.remove('hidden');
    closeMenuButton.classList.add('hidden');
    closeMenuButton.classList.remove('block');
    menuButton.setAttribute('aria-expanded', false);
  }
}

menuButton.addEventListener('click', () => {
  toggleMenu();
});
closeMenuArea.addEventListener('click', () => {
  toggleMenu();
});
