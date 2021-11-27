const navMenu = document.getElementsByClassName("sms-header__nav-menu")[0];
const navDropdown = document.getElementsByClassName("sms-header__nav-dropdown")[0];
const navPage = document.getElementsByClassName("sms-header__nav-page")[0];
let isNavOpen = false;
const updateNavIsOpen = () => {
  const is1280 = window.matchMedia('(min-width: 1280px)');
  if (isNavOpen) {
    navMenu.src = "/blog/wp-content/uploads/2021/11/icon-close.png"
    navDropdown.style.display = is1280.matches ? "block" : "none";
	navPage.style.display = is1280.matches ? "none" : "block";
  }
  else {
    navMenu.src = "/blog/wp-content/uploads/2021/11/icon-menu.png"
    navDropdown.style.display = "none";
    navPage.style.display = "none";
  }
}
const onClickNav = () => {
  isNavOpen = !isNavOpen;
  updateNavIsOpen();
}
const onResizeCheckNav = () => {
  if (!is1280.matches) isNavOpen = false;
  updateNavIsOpen();
}
const onClickOutsideNavMenu = (event) => {
  const isClickInside = navMenu.contains(event.target) || navDropdown.contains(event.target) || navPage.contains(event.target);
  if (!isClickInside && isNavOpen) {
    isNavOpen = false;
    updateNavIsOpen();
  }
}
window.addEventListener('resize', updateNavIsOpen);
document.addEventListener('mousedown', onClickOutsideNavMenu);
