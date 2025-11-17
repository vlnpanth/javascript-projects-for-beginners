const form = document.querySelector('#calculator');
const feetInput = document.querySelector('#feet');
const inchesInput = document.querySelector('#inches');
const results = document.querySelector('#results');

const MIN_INCHES = 0;
const MAX_INCHES = 11;
const MIN_FEET = 0;

const showMessage = (message, isError = false) => {
    results.textContent = message;
    results.classList.toggle('error', isError);
};

const parseValue = (value) => {
    if (value.trim() === '') {
        return NaN;
    }
    return Number(value);
};

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const feet = parseValue(feetInput.value);
    const inches = parseValue(inchesInput.value);

    if (Number.isNaN(feet) || Number.isNaN(inches)) {
        showMessage('Please enter numbers in both fields.', true);
        return;
    }

    if (feet < MIN_FEET) {
        showMessage('Feet must be zero or greater.', true);
        return;
    }

    if (inches < MIN_INCHES || inches > MAX_INCHES) {
        showMessage('Inches must be between 0 and 11.', true);
        return;
    }

    const totalInches = (feet * 12) + inches;
    const totalCentimeters = totalInches * 2.54;

    const meters = totalCentimeters / 100;
    const displayMessage = `${totalCentimeters.toFixed(2)} cm (${meters.toFixed(2)} m)`;
    showMessage(displayMessage);
    form.reset();
    feetInput.focus();
});
