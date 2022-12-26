//Hamburger menu for mobile navigation

const burger = document.querySelector('.burger');
const navMenu = document.querySelector('.navlinks-menu');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    navMenu.classList.toggle('active');
})

// dropdown navigation menu

document.addEventListener( 'click', e => {
  const navLink = querySelector("contact-nav");
  const navLinkMenu = querySelector("dropdown-nav");
})

// horizontal scrolling

const scrollContainer = document.getElementById("products");

// using deltaY property of scrollContainer object to convert amount traveled in Y direction to same amount traveled, but in the X direction
// positive = user scrolling up

scrollContainer.addEventListener("wheel", (normalScroll) => {
  normalScroll.preventDefault();

  scrollContainer.scrollBy({
    left: normalScroll.deltaY < 0 ? -30 : 30,
  })
});







