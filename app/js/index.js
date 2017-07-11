/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import {
	log,
	logTitle
} from 'logger';
/* your imports */
logTitle('Arrow Functions');
/* coding examples */

const hello = () => {
	const es6 = 'ES6';
	return `Hello, ${es6}`;
};

const powers = [1, 2, 3, 4, 5].map((num, index) => Math.pow(num, index));

const add = (a, b) => a + b;

const milesToKm = miles => miles * 1.60943;

log(hello());
log(powers);
log(add(100, 100));
log(milesToKm(100));