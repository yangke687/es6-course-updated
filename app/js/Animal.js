import {
	log
} from 'logger';

export default class Animal {
	constructor() {
		log('I am an animal');
	}
	getClassType() {
		return 'Animal';
	}
}