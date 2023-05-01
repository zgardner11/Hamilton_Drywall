// Hamburger menu for mobile navigation

const burger = document.querySelector('.burger');
const navMenu = document.querySelector('.navlinks-menu');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    navMenu.classList.toggle('active');
})

// Tech data drop down items

const dataHeader = document.querySelector('.dataHeader')
const dataItem = document.querySelector('.dataItem')

dataHeader.addEventListener('click', () => {
    dataItem.classList.toggle('active');
}
)










