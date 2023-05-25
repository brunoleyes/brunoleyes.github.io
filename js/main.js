const abrirMenu = document.querySelector(".abrir-menu");
const navMenu = document.querySelector(".nav-menu");
const itemsNav = document.querySelectorAll(".nav__ul-li");


abrirMenu.addEventListener("click", (e)=>{
    e.preventDefault();
    navMenu.classList.toggle("menu-abierto");

})


itemsNav.forEach((item)=>{
    item.addEventListener("click",(e)=>{
    
        navMenu.classList.toggle("menu-abierto");
    } )
})

