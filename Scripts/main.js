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

// Product navigation

let products = document.querySelectorAll(".finishing-product");


const observer = new IntersectionObserver (entries => {
  entries.forEach(entry => {
    let navProducts = document.querySelectorAll(".product-nav");

    if(entry.isIntersecting) {

    //  let classAdd = navProducts.forEach(navProduct => {
    //     navProduct.classList.add("product-nav-active");
    //   });

    for (const navProduct of navProducts) {
      navProduct.classList.add("product-nav-active");
      // console.log(navProduct.classList)
    }

      console.log(entry.isIntersecting.findIndex)
      console.log(entry.target);
    }

    else {
      for (const navProduct of navProducts) {
        navProduct.classList.remove("product-nav-active");
        // console.log(navProduct.classList)
      }
    }

  })

});

products.forEach(product => {
  observer.observe(product);
});


