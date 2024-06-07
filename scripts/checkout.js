import {cart} from '../data/cart.js';//named export
import {products} from '../data/products.js';
import { formatCurrency } from '../utils/money.js';
import {removeFromCart} from '../data/cart.js';
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';//default export
import {delivaryOptions} from '../data/delivaryOptions.js';




const today = dayjs();
const delivaryDate = today.add(7, 'days');
console.log(delivaryDate.format('dddd, MMMM D'));
let cartSummeryHTML = '';

cart.forEach((cartItem) => {

const productId = cartItem.productId;

let matchingProduct;

products.forEach((product) => {
 if (product.id === productId) {
  matchingProduct = product;
 }
});

const delivaryOptionId = cartItem.delivaryOptionId;
let delivaryOption;
delivaryOptions.forEach((option) => {
 if (option.id === delivaryOptionId) {
  delivaryOption = option;
 }
});

const today = dayjs();
const delivaryDate = today.add(
delivaryOption.delivaryDays, 'days'
);
const dateString = delivaryDate.format(
  'dddd, MMMM D'
);

 cartSummeryHTML += `
 <div class="cart-item-container js-cart-item-container-${matchingProduct.id}">
  <div class="delivery-date">
    Delivery date: ${dateString}
  </div>

  <div class="cart-item-details-grid">
    <img class="product-image"
      src="${matchingProduct.image}">

    <div class="cart-item-details">
      <div class="product-name">
        ${matchingProduct.name}
      </div>
      <div class="product-price">
        $${(matchingProduct.priceCents / 100).toFixed(2)}
      </div>
      <div class="product-quantity"
        <span>
          Quantity: <span class="quantity-label">${cartItem.quantity}</span>
        </span>
        <span class="update-quantity-link link-primary">
          Update
        </span>
        <span class="delete-quantity-link link-primary js-delete-link"
        data-product-id="${matchingProduct.id}">
          Delete
        </span>
      </div>
    </div>

    <div class="delivery-options js-delivary-options">
      <div class="delivery-options-title">
        Choose a delivery option:
      </div>
      ${delivaryOptionsHTML(matchingProduct, cartItem)}
    </div>
  </div>
</div>
`;
});


function delivaryOptionsHTML(matchingProduct, cartItem) {
  let html = '';
  delivaryOptions.forEach((delivaryOption) => {
  const today = dayjs();
  const delivaryDate = today.add(
  delivaryOption.delivaryDays, 'days'
  );
 const dateString = delivaryDate.format('dddd, MMMM D');

 const priceString = delivaryOption.priceCents === 0
  ? 'FREE'
  : `$${formatCurrency(delivaryOption.priceCents)} -`;

  const isChecked = delivaryOption.id === cartItem.delivaryOptionId;

  html += `
<div class="delivery-option">
    <input type="radio" ${isChecked ? 'checked' : ''}
    class="delivery-option-input"
    name="delivery-option-${matchingProduct.id}">
  <div>
    <div class="delivery-option-date">
      ${dateString}
    </div>
    <div class="delivery-option-price">
      ${priceString} Shipping
    </div>
  </div>
</div>
`;
 });

 return html;
 }


document.querySelector('.js-order-summery').innerHTML = cartSummeryHTML;


document.querySelectorAll('.js-delete-link').forEach((link) => {
link.addEventListener('click', () => {
 const productId = link.dataset.productId;
 removeFromCart(productId);

 const container = document.querySelector(`.js-cart-item-container-${productId}`);
 container.remove();
 updateCartQuantity();
 });
});