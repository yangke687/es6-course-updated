/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import {
	log,
	logTitle
} from 'logger';
/* your imports */
logTitle('Function Default Parameters');
/* coding examples */

const calculatePay = (yearSalary, bonus = {
	teamBonus: 0,
	employeeBonus: 0,
}) => {
	return yearSalary + bonus.teamBonus + bonus.employeeBonus;
};

log(calculatePay(22000));
log(calculatePay(22000, {
	teamBonus: 1000,
	employeeBonus: 5000
}));