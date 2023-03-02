
const body = document.getElementsByTagName("body")[0];
const cart = document.querySelector(".cart_display")
const demos = document.querySelectorAll(".demos")
const imgSlide = document.querySelector(".imgSlide")
const asideNavCategories = document.querySelector(".aside-nav_categories")
const btnOpenAsideNav = document.querySelector(".nav_aside_btn-open")
const btnCloseAsideNav = document.querySelector(".nav-aside_btn-close");
const btnOpenCartDisplay = document.querySelector(".cart")
const contadorHtml = document.querySelector(".contadorhtml")
const btnSumar = document.querySelector(".sumar")
const btnRestar = document.querySelector(".restar")
const btnAddCart = document.querySelector(".cart_actions-add-product")
const btnDeleteProductCard = document.querySelector(".cart_products-icon-delete")

let contador = 0;


demos.forEach(demo=>{
    demo.addEventListener("click", function(){
        if(demo.classList.contains("demo1")){
            imgSlide.src ="assets/images/image-product-1.jpg"
        }
        if(demo.classList.contains("demo2")){
            imgSlide.src ="assets/images/image-product-2.jpg"
        }
        if(demo.classList.contains("demo3")){
            imgSlide.src ="assets/images/image-product-3.jpg"
        }
        if(demo.classList.contains("demo4")){
            imgSlide.src ="assets/images/image-product-4.jpg"
        }
        
    })
})



btnOpenAsideNav.addEventListener("click", function(){
    asideNavCategories.style.display = "block";
})

btnCloseAsideNav.addEventListener("click", function(){
    asideNavCategories.style.display = "none";
    body.style.backgroundColor = ""
})

// btnOpenCartDisplay.addEventListener("click", function(){

//     if(cart.style.display === "none"){

//         cart.style.display = "block"
//     }else{
//         cart.style.display = "none"
//     }
// })

btnSumar.addEventListener("click", function(){
    contador= contador + 1;

   contadorHtml.textContent = contador
})
btnRestar.addEventListener("click", function(){

    contador= contador - 1;
    if(contador < 0){
        contador = 0
    }
    

    contadorHtml.textContent = contador
})

btnAddCart.addEventListener("click", function(){

    const product = document.createElement("div")

    product.classList.add("productCart")

    product.innerHTML = `
    <img class="cart_products-img" src="assets/images/image-product-1.jpg" alt="">
    <span class="cart_products-title">Fall Liteded Edition</span>
    <span class="cart_products-price">$125.00</span>
    <b></b>
    <img class="cart_products-icon-delete" src="assets/images/icon-delete.svg" alt="" onclick = deleteProduct()>

    
    `

    document.querySelector(".cart_products").appendChild(product)
})

function deleteProduct(){
    document.querySelector(".productCart").remove()

}










