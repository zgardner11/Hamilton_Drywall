// Hamburger menu for mobile navigation

const burger = document.querySelector('.burger');
const navMenu = document.querySelector('.navlinks-menu');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    navMenu.classList.toggle('active');
})

// Tech data drop down items

function toggleClass( element ) {
    let data = 'dataHeader hidden';

    if ( element.className == data){
        element.className = data.replace('hidden', 'active');
    } else {
        element.className = data;
    }
}










