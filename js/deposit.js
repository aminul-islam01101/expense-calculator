import addition, { nitAmount } from './utilities.js';

document.querySelector('#deposit-btn').addEventListener('click', () => {
    const depositAmount = document.querySelector('#deposit-amount');
    const depositInput = document.querySelector('#deposit-input');

    depositAmount.innerText = addition(depositAmount, depositInput);
    nitAmount.innerText = addition(nitAmount, depositInput);
});
