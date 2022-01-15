// Navigation
const openMenu = document.getElementsByClassName('open-menu')[0];
const closeMenu = document.getElementsByClassName('close-menu')[0];
const menuBg = document.getElementById('menu-active-bg');
openMenu.addEventListener('click', openNav);
closeMenu.addEventListener('click', closeNav);
menuBg.addEventListener('click', closeNav)

/* Controls the mobile navigation
 :target nav-container: <nav> - contains navigation items
 :target main: <main> - background to be added when nav is active
*/
const navContainer = document.getElementsByClassName('nav-container')[0];
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

/* Slider
 :target left-arrow: <svg> - click to see previous image
 :target right-arrow: <svg> - click to see next image
 :target hero-slider: <div> - background image to be change
 :target sliderSrc: Object - contains image path
 :target trackSlider: Numbeer - serves as a tracker and a key to access image path
*/
const sliderSrc = {
    1: 'mobile-image-hero-1',
    2: 'mobile-image-hero-2',
    3: 'mobile-image-hero-3'
}
const heroSlider = document.getElementById('hero-slider');
const leftArrow = document.getElementsByClassName('left-arrow')[0];
const rightArrow = document.getElementsByClassName('right-arrow')[0];
leftArrow.addEventListener('click', prevSlide);
rightArrow.addEventListener('click', nextSlide);

let trackSlider = 1;
function prevSlide() {
    // Show previous image
    if (trackSlider <= 1) {
        heroSlider.style.background = `url(images/${sliderSrc[3]}.jpg)`;
        trackSlider = 3;
    } else {
        heroSlider.style.background = `url(images/${sliderSrc[trackSlider - 1]}.jpg)`;
        trackSlider = trackSlider - 1;
    }
}
function nextSlide() {
    // Show next image
    if (trackSlider >= 3) {
        heroSlider.style.background = `url(../images/${sliderSrc[1]}.jpg)`;
        trackSlider = 1;
    } else {
        heroSlider.style.background = `url(../images/${sliderSrc[trackSlider + 1]}.jpg)`;
        trackSlider = trackSlider + 1;
    }
}