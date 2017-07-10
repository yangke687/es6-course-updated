/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import {
	log,
	logTitle
} from 'logger';
/* your imports */
//import * as Math from './Math';
import {
	add,
	sub,
	div,
	mul,
	PI
} from './Math';
import Animal from './Animal';
logTitle('Title');
/* coding examples */
log(add(2, 2));
log(sub(2, 2));
log(div(2, 2));
log(mul(2, 2));
log(PI);

const animal = new Animal();
log(animal.getClassType());