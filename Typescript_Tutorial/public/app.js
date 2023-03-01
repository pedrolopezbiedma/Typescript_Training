const me = {
    name: 'Pedro',
    age: 35,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log('I have spent¡', amount);
        return amount;
    }
};
import { Invoice } from "./classes/Invoice.js";
const testInvoice = new Invoice('Pedro', 'work on the mario website', 250);
const testInvoice2 = new Invoice('Luigi', 'work on the mario website', 200);
let invoices = [];
invoices.push(testInvoice);
invoices.push(testInvoice2);
invoices.forEach((invoice) => {
    console.log(invoice.client, invoice.amount, invoice.format());
});
// HTML form
const form = document.querySelector('.new-item-form');
// Form inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// Add event listener to the form
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
