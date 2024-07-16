import {renderOrderSummery} from "./checkouts/orderSummery.js";
import {renderPaymentSummary} from './checkouts/paymentSummery.js';
//import '../data/cart-class.js';
import {loadProducts} from '../data/products.js';

loadProducts(() => {
 renderOrderSummery();
 renderPaymentSummary();
});
