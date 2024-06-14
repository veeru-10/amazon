import {formatCurrency} from "../utils/money.js";
console.log('test suite: formatCurrency');
console.log('converts cents to dollers');

if (formatCurrency(2095) === '20.95') {
 console.log('passed');
} else {
 console.log('Failed');
}//basic case

console.log('works with 0')
if (formatCurrency(0) === '0.00') {
 console.log('passed');
} else {
 console.log('Failed');
}//edge case

console.log('finds nearest value');
if (formatCurrency(2000.5) === '20.01') {
 console.log('passed');
} else {
 console.log('Failed');
}

console.log('test suite: calculate tax');
console.log('calculate a 10% tax');
console.log('passed');
console.log('works with 0');
console.log('passed');


/* two types of test cases 
1 . basic test cases - check weather its working or not
2. edge cases -test with values that are tricky */


//testing framework - external library that helps us write test easier 
// texting popular framework is - jasmine