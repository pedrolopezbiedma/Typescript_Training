"use strict";
// Classes
class Invoice {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `${this.client} owes €${this.amount} for ${this.details}`;
    }
}
const testInvoice = new Invoice('Pedro', 'work on the mario website', 250);
const testInvoice2 = new Invoice('Luigi', 'work on the mario website', 200);
let invoices = [];
invoices.push(testInvoice);
invoices.push(testInvoice2);
console.log(invoices);
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
