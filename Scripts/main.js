// Hamburger menu for mobile navigation

const burger = document.querySelector('.burger');
const navMenu = document.querySelector('.navlinks-menu');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    navMenu.classList.toggle('active');
})

// Product navigation

let products = document.querySelectorAll(".product-section");

// let productRoot = document.querySelector("#finishing-products-main");

const options = {
  root: null,
  threshold: .38,
  rootMargin: "150px"
};

const observer = new IntersectionObserver(function (entries) {

  entries.forEach(entry => {

    console.log(entries)

    let navProducts = document.querySelectorAll(".product-nav");

    function activeNav() {
      for (const navProduct of navProducts) {
        if(entry.target.id === navProduct.dataset.label){
            navProduct.classList.add("product-nav-active");
            console.log("data: " + navProduct.dataset.label);
            console.log("target: " + entry.target.id);
        }
      }
    }

      if(entry.isIntersecting) {
        activeNav();
        console.log(entries)
      }

      else{
        for (const navProduct of navProducts) {
          navProduct.classList.remove("product-nav-active");
          // console.log(navProduct.classList)
        }
        return
      }
      
    });
}, options);

products.forEach(product => {
  observer.observe(product);
});













// function activeNav() {
//   const sections = document.querySelectorAll(".finishing-product")
//   const navContainer = document.createElement("nav");
//   const navItems = Array.from(sections).map(section => {
//     return `
//       <div class = "nav
//     `;
//   }); 



  

//   console.log(sections);
//   console.log(navItems);
// };

// activeNav();

// Accessing array.map method, which is not available to node list by itself as sections.map



//  <nav id = "products-nav">
// <ul>
//     <li>
//         <a href="#textures" class = "product-nav product-nav-active">Textures</a>
//     </li>
    
//     <li>
//         <a href="#patch" class = "product-nav">Patch & Repair</a>

//     </li>

//     <li>
//         <a href="#joints" class = "product-nav">Joint Compounds</a>
//     </li>

//     <li>
//         <a href="#manuhousing" class = "product-nav">Manufactured Housing</a>
//     </li>

//     <li>
//         <a href="#dcs" class = "product-nav">Drywall Completion Systems</a>
//     </li>

//     <li>
//         <a href="#stc" class = "product-nav">Setting Type Compounds</a>
//     </li>

//     <li>
//         <a href="#concrete" class = "product-nav">Concrete Finishing</a>
//     </li>

//     <li>
//         <a href="#wallboard" class = "product-nav">Wallboard Tape</a>
//     </li>
// </ul>
// </nav> 