import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
// ########### Playground ############
// let docOne: HasFormatter;
// let docTwo: HasFormatter;
// docOne = new Invoice('Yoshi', 'Web work', 250);
// docTwo = new Payment('Mario', 'Plumbing work', 150);
// const testInvoice = new Invoice('Pedro', 'work on the mario website', 250);
// const testInvoice2 = new Invoice('Luigi', 'work on the mario website', 200);
// let invoices: Invoice[] = [];
// invoices.push(testInvoice);
// invoices.push(testInvoice2);
// invoices.forEach((invoice: Invoice) => {
//     console.log(invoice.client, invoice.amount, invoice.format());
// })
// ########### Playground ############
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
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    console.log(doc, doc.format());
});
