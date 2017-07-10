/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import {
	log,
	logTitle
} from 'logger';
/* your imports */
logTitle('Spread Operator Arrays');
/* coding examples */
const arrayOne = ['Marian', 'Anna', 'Alex'];
const arrayTwo = ['Sald', 'Ismall', 'Aisha'];

// array
const concatArray = [...arrayOne, ...arrayTwo];

concatArray.forEach((name) => {
	log(name);
});

// string
const name = 'Marian';
const nameToArray = [...name];
nameToArray.forEach((letter) => {
	log(letter);
});

// functions
const addNumbers = (n1, n2, n3) => n1 + n2 + n3;
const numbers = [1, 5, 9];
log(addNumbers(...numbers));