/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import {
	log,
	logTitle
} from 'logger';
/* your imports */
logTitle('Object Destructing');
/* coding examples */

const getUser = () => {
	return {
		name: 'John',
		surname: 'Doe',
		gender: 'male',
		address: {
			country: 'United States',
			city: 'California',
			postCode: 'CA',
			fullAddress: {
				doorNumber: 22,
				street: 'LA st',
			}
		},
		age: 29,
	}
}

const user = getUser();

const {
	name,
	age,
	address: {
		country,
		city,
		postCode,
		fullAddress: {
			doorNumber: number,
			street,
		}
	}
} = user;

log(`${name} ${age} ${city} ${number} ${street}`);