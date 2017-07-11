/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import {
	log,
	logTitle
} from 'logger';
/* your imports */
logTitle('Promise Object');
/* coding examples */

/*const promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('data back from the server');
	}, 3000);

	// this method will be invoked first
	setTimeout(() => {
		reject('no data back from the server, there was an error')
	}, 2000);
});

promise.then(response => {
	log(response);
}).catch(error => {
	log(error);
});*/

// promise all

const namesPromise = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve(['Anna', 'Jones', 'Ali', 'Jake']);
	}, 3000);

	setTimeout(() => {
		reject('no data back from server, there was an error');
	}, 4000);
});

const surnamesPromise = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve(['Williams', 'Bravo', 'Mohammado', 'Smith']);
	}, 3000);
});

/*Promise.all([namesPromise, surnamesPromise])
	.then(data => {
		//log(data);
		const [names, surnames] = data;
		for (var i=0; i<names.length; i++) {
			const name = names[i];
			const surname = surnames[i];
			log(`${name} ${surname}`);
		}
	})
	.catch(error => {
		log(error);
	});*/

	// realworld promise

const getRandomUsers = n => {
	const fetchRandomUsers = fetch(`https://randomuser.me/api/?results=${n}`);
	fetchRandomUsers.then(data => {
		data.json().then(randomUsers => {
			randomUsers.results.forEach(user => {
				const {gender, email} = user;
				log(`${gender} ${email}`);
			});
		});
	});
}

getRandomUsers(50);