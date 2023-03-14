const menuEmail = document.querySelector(".navbar-email")
const desktopMenu = document.querySelector(".desktop-menu")
const menuHamIcon = document.querySelector(".menu")
const mobileMenu = document.querySelector(".mobile-menu")
const menuCartIcon = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");
const cardsContainer = document.querySelector(".cards-container");

menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
menuCartIcon.addEventListener("click", toggleCartAside);

function toggleDesktopMenu() {
    if (!aside.classList.contains("inactive")) {
        aside.classList.add("inactive");
    }
    desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
    if (!aside.classList.contains("inactive")) {
        aside.classList.add("inactive");
    }
    mobileMenu.classList.toggle("inactive");
}

function toggleCartAside() {
    if (!mobileMenu.classList.contains("inactive")) {
        mobileMenu.classList.add("inactive");
    }
    if (!desktopMenu.classList.contains("inactive")) {
        desktopMenu.classList.add("inactive");
    }
    aside.classList.toggle("inactive");
}

const productList = [];
productList.push({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: "Cocina",
    price: 930,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: "Tele",
    price: 1200,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

/*
<div class="product-card">
    <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt="">
        <div class="product-info">
            <div>
                <p>$120,00</p>
                <p>Bike</p>
            </div>
            <figure>
                <img src="./icons/bt_add_to_cart.svg" alt="">
            </figure>
        </div>
</div>
*/

function renderProducts (arr) {
    for (product of arr) {
        console.log(product)
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
        
        const productImg = document.createElement("img");
        productImg.setAttribute("src", product.image);
    
        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");
        
        const productInfoDiv = document.createElement("div");
    
        const prodcutPrice = document.createElement("div");
        prodcutPrice.innerText = "$" + product.price;
        
        const prodcutName = document.createElement("div");
        prodcutName.innerText = product.name;
        
        const productInfoFigure = document.createElement("figure");
        const productImgCart = document.createElement("img");
        productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg")
    
        // Empiezo a meter nodos sobre nodos
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfoDiv.append(prodcutName, prodcutPrice);
    
        productInfo.append(productInfoDiv, productInfoFigure);
    
        productCard.append(productImg, productInfo);
    
        // Meto todo el productCard al cardsContainer
    
        cardsContainer.appendChild(productCard);
    
    }
};

renderProducts (productList);
