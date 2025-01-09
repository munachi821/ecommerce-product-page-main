const checkoutbtn = document.querySelector(".checkout");
const cart = document.querySelector(".cart");
const cartItems = document.querySelector(".cart-items");
const cartItem = document.querySelector(".cart-item");
const bars = document.querySelector(".bars");
const forOpacity = document.querySelector(".foropacity");
const times = document.querySelector(".times");
const fullImage = document.querySelector(".fullImg");
const nextImages = document.querySelector(".next-images");
const images = document.querySelectorAll(".image");
const Item = document.querySelector(".item");

nextImages.addEventListener("click", (e) => {
    let clickedImage = e.target.closest(".image img");
    if (clickedImage) {
        const imageNumber = clickedImage.dataset.index;
        if(imageNumber) {
            fullImage.innerHTML = `<img src="images/image-product-${imageNumber}.jpg" class="main-image">`
        }
    }
})

images.forEach((image) => {
    image.addEventListener("click", (e) => {
        if(image.classList.contains("active")) {
            return;
        }else{
            images.forEach((img) => {
                img.classList.remove("active");
            })
            image.classList.add("active");
        }
    })
})
//for opening the menu in small screens
bars.addEventListener("click", () => {
    forOpacity.classList.toggle("active")
})
window.addEventListener("click", (e) => {
    if (e.target === forOpacity) {
        forOpacity.classList.toggle("active");
    }
})
times.addEventListener("click", () => {
    forOpacity.classList.toggle("active");
})

//for the hiding/showing the checkout div
checkoutbtn.addEventListener("click", function (e) {
    cart.classList.toggle("active");
});

const minus = document.querySelector(".minus");
const plus = document.querySelector(".plus");
let count = document.querySelector(".count");
const addtocart_btn = document.querySelector(".addtocart");

plus.addEventListener("click", () => {
    let currentCount = parseInt(count.textContent);
    count.textContent = currentCount + 1;
    updateCart();
})
minus.addEventListener("click", () => {
    let currentCount = parseInt(count.textContent);
    if (currentCount <= 1) {
        return
    }
    count.textContent = currentCount - 1;
    updateCart();
})

let notificationCount = document.querySelector(".notification p");

addtocart_btn.addEventListener("click", () => {
    if(cartItem.classList.contains("active")) {
        return;
    }
    Item.innerHTML = `
      <div class="cart-items">
        <div class="item-pic">
          <img src="images/image-product-1-thumbnail.jpg" alt="item thumbnail">
        </div>
        <div class="cart-text">
          <p>Fall Limited Edition Sneakers</p>
          <p class="calculate">$125.00 x ${count.textContent} <span class="total">$125.00</span></p>
        </div>
        <div class="delete">
          <img src="images/icon-delete.svg" alt="">
        </div>
      </div>
                           `;
    cartItem.classList.add("active");

    const deletebtn = document.querySelector(".delete");
    const notification = document.querySelector(".notification");

    deletebtn.addEventListener("click", () => {
        cartItem.classList.remove("active");

        Item.innerHTML = ``;
        notification.classList.toggle("active");
        count.textContent = 1;
    })

    if(cartItem.classList.contains("active")) {
        notification.classList.toggle("active");
    }
    notificationCount.textContent = parseInt(count.textContent);
})



function updateCart() {
    if(!cartItem.classList.contains("active")) {
        return;
    }

    const calculateElement = document.querySelector(".calculate");
    const quantity = parseInt(count.textContent);
    notificationCount.textContent = `${quantity}`;
    const total = 125 * quantity;
    calculateElement.innerHTML = `$125.00 x ${quantity} <span class="total">$${total}.00</span></p>`
}

const previous = document.querySelector(".previous");
const next = document.querySelector(".next");
let imageadd = 1;

previous.addEventListener("click", (e) => {
    if(imageadd > 1){
        imageadd--;
        fullImage.innerHTML = `<img src="images/image-product-${imageadd}.jpg" class="main-image">`
    }
})
next.addEventListener("click", (e) => {
    if(imageadd < 4){
        imageadd++;
        fullImage.innerHTML = `<img src="images/image-product-${imageadd}.jpg" class="main-image">`
    }
})
