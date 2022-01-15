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

/* Hero text slider
 :target hero-heading: <h1> - heading to change
 :target hero-subheading: <p> - paragraph to change
 :target sliderHeadingSrc: Object - contains the texts for <h1>
 :target sliderSubHeadingSrc: Object - contains the texts for <p> associated with <h1>
*/
const sliderHeadingSrc = {
    1: 'Discover innovative ways to decorate',
    2: 'We are available all across the globe',
    3: 'Manufactured with the best materials'
}
const sliderSubHeadingSrc = {
    1: 'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.',
    2: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we're in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    3: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
}
const heroHeading = document.getElementsByClassName('hero-heading')[0];
const heroSubHeading = document.getElementsByClassName('hero-subheading')[0];

let trackSlider = 1;
function prevSlide() {
    // Show previous image
    if (trackSlider <= 1) {
        heroSlider.style.background = `url(images/${sliderSrc[3]}.jpg)`;
        heroHeading.textContent = sliderHeadingSrc[3];
        heroSubHeading.textContent = sliderSubHeadingSrc[3];
        trackSlider = 3;
    } else {
        heroSlider.style.background = `url(images/${sliderSrc[trackSlider - 1]}.jpg)`;
        heroHeading.textContent = sliderHeadingSrc[trackSlider - 1];
        heroSubHeading.textContent = sliderSubHeadingSrc[trackSlider - 1];
        trackSlider = trackSlider - 1;
    }
}
function nextSlide() {
    // Show next image
    if (trackSlider >= 3) {
        heroSlider.style.background = `url(../images/${sliderSrc[1]}.jpg)`;
        heroHeading.textContent = sliderHeadingSrc[1];
        heroSubHeading.textContent = sliderSubHeadingSrc[1];
        trackSlider = 1;
    } else {
        heroSlider.style.background = `url(../images/${sliderSrc[trackSlider + 1]}.jpg)`;
        heroHeading.textContent = sliderHeadingSrc[trackSlider + 1];
        heroSubHeading.textContent = sliderSubHeadingSrc[trackSlider + 1];
        trackSlider = trackSlider + 1;
    }
}