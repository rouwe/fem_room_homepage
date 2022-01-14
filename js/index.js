// Navigation
const openMenu = document.getElementsByClassName('open-menu')[0];
const closeMenu = document.getElementsByClassName('close-menu')[0];
openMenu.addEventListener('click', openNav);
closeMenu.addEventListener('click', closeNav);

/* Controls the mobile navigation
 :target nav-container: <nav> - contains navigation items
 :target main: <main> - background to be added when nav is active
*/
const navContainer = document.getElementsByClassName('nav-container')[0];
const menuBg = document.getElementById('menu-active-bg');
function openNav() {
    // Open the navigation
    navContainer.style.transform = 'translateY(0%)';
    menuBg.style.display = 'block';
}
function closeNav() {
    // Close the navigation
    navContainer.style.transform = 'translateY(-200%)';
    menuBg.style.display = 'none';
}