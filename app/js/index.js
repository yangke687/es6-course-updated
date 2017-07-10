/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import {
	log,
	logTitle
} from 'logger';
/* your imports */
import Animal from './Animal';
logTitle('Let Keywords');
/* coding examples */

/* 
	the variable i was only can be seen
	within the for-loop block scope
*/

for (let i = 0; i < 10; i++) {
	log(i);
}

console.log(i);