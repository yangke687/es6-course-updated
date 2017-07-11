/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import {
	log,
	logTitle
} from 'logger';
/* your imports */
logTitle('Lexical this');
/* coding examples */

const person = {
	name: 'Alex',
	cars: ['ferrari', 'lambo'],
	toString: function() {
		log(`${this.name} has ${this.cars}`);
		this.cars.forEach(car => {
			log(`${this.name} has ${car}`);
		});
		// equals to 
		log('==================');
		this.cars.forEach(function(car) {
			log(`${this.name} has ${car}`);
		}.bind(this));
	}
}

person.toString();