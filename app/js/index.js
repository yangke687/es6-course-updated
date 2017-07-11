/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import {
	log,
	logTitle
} from 'logger';
/* your imports */
logTitle('Array Destructing');
/* coding examples */

const names = ['Anna', 'Mariam', 'Joe', 'Mark', 'Matt'];

const [anna, mariam, joe, mark, matt] = names;

log(anna);
log(mariam);
log(joe);

const [anna2, , joe2] = names;
log(`${anna2} ${joe2}`);

const [anna3, , joe3, ...restProps] = names;
log(restProps);