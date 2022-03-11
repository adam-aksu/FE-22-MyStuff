const myForm = document.querySelector('#myForm');
const email = document.querySelector('#email');

// Validate text
function validateText(id) {
	const input = document.querySelector(id);

	if(input.value === '' || input.value.length < 2) {
		input.classList.remove('is-valid');
		input.classList.add('is-invalid');
		input.focus();
		return false;
	}

    input.classList.add('is-valid')
	input.classList.remove('is-invalid')
	return true;
}

// Validate email
function validateEmail(emailInput) {
	
	let regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

	if(regEx.test(emailInput.value)) {
		emailInput.classList.add('is-valid');
		emailInput.classList.remove('is-invalid');
		return true;
	}
}

// Validate checkbox
function validateCheckBox(id) {
	const input = document.querySelector(id);

	if(input.checked) {
		input.classList.remove('is-invalid');
		input.classList.add('is-valid');
		input.focus();
		return true;
	}

    input.classList.add('is-invalid')
	input.classList.remove('is-valid')
	return false;
}

// On submit
myForm.addEventListener('submit', e => {
	e.preventDefault();

	const errors = [];

	for(let i = 0; i < e.currentTarget.length; i++)
	{
		if(e.currentTarget[i].type === 'text')
		{
			errors[i] = validateText('#' + e.currentTarget[i].id);
		}
		else if(e.currentTarget[i].type === 'email')
		{
			errors[i] = validateEmail(email);
		}
		else if(e.currentTarget[i].type === 'checkbox')
		{
			errors[i] = validateCheckBox('#' + e.currentTarget[i].id);
		}
	}

	if(!errors.includes(false)){
		alert("Thank you!")
	}
})