// Basic "Add to Cart" functionality (just incrementing counter)

const cartBtnList = document.querySelectorAll('.product-card .btn');
const cartLink = document.querySelector('.nav ul li a.cart');

let cartCount = 0;

cartBtnList.forEach(btn => {
  btn.addEventListener('click', () => {
    cartCount++;
    cartLink.textContent = `Cart (${cartCount})`;
    alert('Product added to cart!');
  });
});
