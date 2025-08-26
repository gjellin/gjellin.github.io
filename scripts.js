document.addEventListener('DOMContentLoaded', function () {
const form = document.getElementById('vacationForm');
const statusContainer = document.getElementById('formStatus');
const submitButton = document.getElementById('submitButton');
// Handle mouse click only
submitButton.addEventListener('click', function () {
let isValid = true;
let firstErrorField = null;
// Clear previous errors
document.querySelectorAll('.error').forEach(function (error) {
error.textContent = '';
});
document.querySelectorAll('input').forEach(function (input) {
input.style.border = '';
});
// Validate First Name
const firstName = document.getElementById('firstName');
if (firstName.value.trim() === '') {
isValid = false;
document.getElementById('firstNameError').textContent = 'First Name is incomplete';
firstName.style.border = '2px solid red';
if (!firstErrorField) firstErrorField = firstName;
}
// Validate Last Name
const lastName = document.getElementById('lastName');
if (lastName.value.trim() === '') {
isValid = false;
document.getElementById('lastNameError').textContent = 'Last Name is incomplete';
lastName.style.border = '2px solid red';
if (!firstErrorField) firstErrorField = lastName;
}
// Validate Email
const email = document.getElementById('email');
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (email.value.trim() === '') {
isValid = false;
document.getElementById('emailError').textContent = 'Email is incomplete';
email.style.border = '2px solid red';
if (!firstErrorField) firstErrorField = email;
} else if (!emailPattern.test(email.value.trim())) {
isValid = false;
document.getElementById('emailError').textContent = 'Email is invalid';
email.style.border = '2px solid red';
if (!firstErrorField) firstErrorField = email;
}
// Validate Phone
const phone = document.getElementById('phone');
const phonePattern = /^\d{10}$/;
const phoneValue = phone.value.replace(/[^\d]/g, '');
if (phone.value.trim() === '') {
isValid = false;
document.getElementById('phoneError').textContent = 'Phone is incomplete';
phone.style.border = '2px solid red';
if (!firstErrorField) firstErrorField = phone;
} else if (!phonePattern.test(phoneValue)) {
isValid = false;
document.getElementById('phoneError').textContent = 'Phone is invalid';
phone.style.border = '2px solid red';
if (!firstErrorField) firstErrorField = phone;
}
if (isValid) {
form.style.display = 'none';
statusContainer.textContent = 'Your form has been successfully submitted';
} else if (firstErrorField) {
firstErrorField.focus();
}
});
// Prevent keyboard interaction with the "Submit" button
submitButton.addEventListener('keydown', function (event) {
if (event.key === 'Enter' || event.key === ' ') {
event.preventDefault();
}
});
// Accordion functionality
const accordions = document.querySelectorAll('.accordion button');
accordions.forEach(function (accordion) {
accordion.addEventListener('click', function () {
const expanded = this.getAttribute('aria-expanded') === 'true' || false;
this.setAttribute('aria-expanded', !expanded);
const panel = document.getElementById(this.getAttribute('aria-controls'));
if (expanded) {
panel.hidden = true;
} else {
panel.hidden = false;
}
});
});
});

document.addEventListener('DOMContentLoaded', function () {
const winTripButton = document.getElementById('winTripButton');
const winTripModal = document.getElementById('winTripModal');
const modalContent = winTripModal.querySelector('.modal-content');
const closeModalButton = document.getElementById('closeModalButton');
// Open the modal
winTripButton.addEventListener('click', function () {
winTripModal.setAttribute('aria-hidden', 'false');
modalContent.focus(); // Set focus on the modal content
});
// Close the modal when clicking the close button
closeModalButton.addEventListener('click', function () {
winTripModal.setAttribute('aria-hidden', 'true');
});
// Close the modal when clicking outside the content
winTripModal.addEventListener('click', function (event) {
if (event.target === winTripModal) {
winTripModal.setAttribute('aria-hidden', 'true');
}
});
// Close the modal with the Escape key
document.addEventListener('keydown', function (event) {
if (event.key === 'Escape' && winTripModal.getAttribute('aria-hidden') === 'false') {
winTripModal.setAttribute('aria-hidden', 'true');
}
});
});