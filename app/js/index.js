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
logTitle('Const Keywords');
/* coding examples */

const name = 'Maria';

/* SyntaxError: "name" is read-only */
//name = '1';

log(name);

/* 
 * object property can be mutable 
 * although object defined as const 
 */

const person = {};
person['name'] = 'Maria in Object';

log(person.name);

/*
 * array elements can be mutable
 * although array defined as const
 */
const array = [];
array.push('Maria in Array');

log(array[0]);