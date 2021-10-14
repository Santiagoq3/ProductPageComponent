
const body = document.getElementsByTagName("body")[0];
const cart = document.querySelector(".cart_display")

const asideNavCategories = document.querySelector(".aside-nav_categories")

const btnOpenAsideNav = document.querySelector(".nav_aside_btn-open")

const btnCloseAsideNav = document.querySelector(".nav-aside_btn-close");

const btnOpenCartDisplay = document.querySelector(".cart")

btnOpenAsideNav.addEventListener("click", function(){
    asideNavCategories.style.display = "block";
    body.style.backgroundColor = "rgba(24, 21, 21, 0.4)"
})

btnCloseAsideNav.addEventListener("click", function(){
    asideNavCategories.style.display = "none";
    body.style.backgroundColor = ""
})

btnOpenCartDisplay.addEventListener("click", function(){

    if(cart.style.display === "none"){

        cart.style.display = "block"
    }else{
        cart.style.display = "none"
    }
})


