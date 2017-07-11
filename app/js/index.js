/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import {
	log,
	logTitle
} from 'logger';
/* your imports */
logTitle('ES6 Classes');
/* coding examples */

class Animal {
	constructor(name, age) {
		this.name = name;
		this.age = age;
		log(`${name} was created`);
	}

	static iAmStaticMethod() {
		log('I am a static method inside of an Animal class');
	}

	eat() {
		log(`${this.name} is eating`);
	}

	sleep() {
		log(`${this.name} is sleeping`);
	}

	wakeup() {
		log(`${this.name} is waking up`);
	}

	logAge() {
		log(`${this.name} is age at ${this.age}`);
	}
}

class Dog extends Animal {
	constructor(name, age, breed) {
		super(name, age);
		this.breed = breed;
	}

	logBreed() {
		super.logAge();
		log(`${this.name} is a ${this.breed}`);
	}
}

const mike = new Dog('Sha', 2, 'Bulldog');
mike.logBreed();

Animal.iAmStaticMethod();

/*const bobby = new Animal('bobby', 2);
bobby.eat();
bobby.sleep();
bobby.wakeup();
bobby.logAge();

log('---------------------------------');

const marshall = new Animal('marshall', 3);
marshall.eat();
marshall.sleep();
marshall.wakeup();
marshall.logAge();*/