//class is a better way to generate objects in oop

class Cart {   //use pascal case -Class- for oop, it is a object generator
 cartItems;//cartItems = undefined;// it is a public property
 #localStorageKey;//localStorageKey = undefined;//# represents private property that means cannot access outside of class 

 constructor(localStorageKey) {
  this.#localStorageKey = localStorageKey;
  this.#loadFromStorage();
 }

 #loadFromStorage() {
  Cart.cartItems = JSON.parse(localStorage.getItem(this.#localStorageKey));
 
   if (!this.cartItems) {
   this.cartItems = [{
     productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
     quantity: 2,
     deliveryOptionId: '1'
   }, {
     productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
     quantity: 1,
     deliveryOptionId: '2'
   }]; 
   }
 }

 saveToStorage() {
  localStorage.setItem(this.#localStorageKey, JSON.stringify(this.cartItems));
}


addToCart(productId) {
 let matchingItem;
 this.cartItems.forEach((cartItem) => {
  if (productId === cartItem.productId) {
    matchingItem = cartItem;
  }
 });
 
 if (matchingItem) {
   matchingItem.quantity += 1;
 } else {
   this.cartItems.push({
     productId,
     quantity: 1,
     deliveryOptionId: '1'
   });
}
 this.saveToStorage();
}

removeFromCart(productId) {
 const newCart = [];
 this.cartItems.forEach((cartItem) => {
  if (cartItem.productId != productId) {
   newCart.push(cartItem);
  }
 });
 
 this.cartItems = newCart;
 this.saveToStorage();
 }


 updateDeliveryOption(productId, deliveryOptionId) {
  let matchingItem;
  this.cartItems.forEach((cartItem) => {
   if (productId === cartItem.productId) {
     matchingItem = cartItem;
   }
  });

  matchingItem.deliveryOptionId = deliveryOptionId;
  this.saveToStorage();
}

}


const cart = new Cart('cart-oop');//position of curly brackets used for constrctors

const businessCart = new Cart('business-oop');


console.log(cart);
console.log(businessCart);
console.log(businessCart instanceof Cart);//true

//cart.#localStorageKey = 'test';


//instance = an object generated from a class is known as instance example Cart, businessCart; 