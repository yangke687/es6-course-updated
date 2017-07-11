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

const promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('data back from the server');
	}, 3000);

	// this method will be invoked first
	setTimeout(() => {
		reject('no data back from the server, there was an error')
	}, 4000);
});

promise.then(response => {
	log(response);
}).catch(error => {
	log(error);
});

// promise all
