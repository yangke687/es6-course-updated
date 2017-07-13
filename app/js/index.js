/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import {
	log,
	logTitle
} from 'logger';
/* your imports */
import { coroutine as co } from 'bluebird';
logTitle('Generators and Promises');
/* coding examples */

/* Generators Basic */
/*const getNumbers = function* () {
	yield 1;
	yield 'hello';
	yield true;
	yield { name: 'Alex', }
	return 'I am done';
}

const numbersGen = getNumbers();
log(numbersGen.next().value);
log(numbersGen.next().value);
log(numbersGen.next().value);
log(numbersGen.next().value);
log(numbersGen.next().value);
log(numbersGen.next().value);*/

/* Generators More */

/*const enhancedGetNumbers = function* (numbers) {
	for (var i=0; i<numbers.length; i++) {
		yield numbers[i];
	}
}

const enhancedNubmersGen = enhancedGetNumbers([1,2,3,4,5]);
const interval = setInterval(() => {
	const next = enhancedNubmersGen.next();
	if(next.done) {
		log('this generator is done');
		clearInterval(interval);
	} else {
		const number = next.value;
		log(number);
	}
}, 1000);*/

/* Generators, Promises, Coroutines */

/*const getRandomUsers = n => {
	const fetchRandomUsers = fetch(`https://randomuser.me/api/?results=${n}`);
	fetchRandomUsers.then(data => {
		data.json().then(randomUsers => {
			log(JSON.stringify(randomUsers.results.length));
			randomUsers.results.forEach(user => {
				const { gender, email } = user;
				log(`${gender} ${email}`);
			});
		});
	});
}

getRandomUsers(100);*/

const getRandomUsers = co(function* (n) {
	const fetchRandomUsers = yield fetch(`https://randomuser.me/api/?results=${n}`);
	const data = yield fetchRandomUsers.json();
	return data;
});

getRandomUsers(10).then(randomUsers => {
	randomUsers.results.forEach(user => {
		const { gender, email } = user;
		log(`${gender} ${email}`);
	})
});






