const form = document.querySelector('.modal-checkout__form');
form.addEventListener('submit', async e => {
  e.preventDefault();
  const name = document.querySelector('#input-name').value;
  const identification = document.querySelector('#input-id').value;
  const telephone = document.querySelector('#input-telephone').value;
  const email = document.querySelector('#input-email').value;
  const creditCard = document.querySelector('#input-creditcard').value;

  const response = await fetch("http://localhost:3000/users",
    {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name, 
        identification,
        telephone,
        email,
        creditCard
      })
    });
  const data = await response.json();
  
  // Validation fields form
  //  // name validation
  //  verifyFilled(nameInput, nameErrorDiv);
  //  // id number validation
  //  verifyFilled(IdNumberInput, IdErrorDiv);
  //  // telephone validation
  //  verifyFilled(telephoneInput, telephoneErrorDiv);
  //  // email validation
  //  verifyFilled(emailInput, emailErrorDiv);
  //  // credit card number validation
  //  verifyFilled(numberCreditCardInput, numberCreditCardErrorDiv);
  //  // month validation
  //  if (Number.parseInt(monthInput.value, 10) > 0 && Number.parseInt(monthInput.value, 10) <= 12) {
  //    showError(monthInput, monthErrorDiv, '', false);
 
  //  } else {
  //    showError(monthInput, monthErrorDiv, 'Mes incorrecto');
  //  }
  //  // year validation
  //  verifyFilled(yearInput, yearErrorDiv);
  //  // cvc validation
  //  verifyFilled(cvcInput, cvcErrorDiv);
});

// Fill image dynamically and validation form
// User name
let nameCard = document.querySelector('.card__details-name');
let nameInput = document.querySelector('#input-name');
let nameErrorDiv = document.querySelector('.modal-checkout__name--error');

nameInput.addEventListener('input', () => {
  if (nameInput.value === '') {
    showError(nameInput, nameErrorDiv, 'Este campo no puede estar vacio');
    nameCard.textContent = 'JOHN SMITH';
  } else {
    nameCard.textContent = nameInput.value;
    showError(nameInput, nameErrorDiv, '', false);
  } 
});

// identification number
let IdNumberInput = document.querySelector('#input-id');
let IdErrorDiv = document.querySelector('.modal-checkout__identification--error');

IdNumberInput.addEventListener('input', e => {
  let inputValue = e.target.value;

  if (IdNumberInput.value === '') {
    showError(IdNumberInput, IdErrorDiv, 'Este campo no puede estar vacio');
  } 
  
  let regExp = /[A-z]/g;
  if (regExp.test(IdNumberInput.value)) {
    showError(IdNumberInput, IdErrorDiv, 'Error de formato, números solamente');
  } else {
    IdNumberInput.value = inputValue.replace(/\s/g, '').trim();
    showError(IdNumberInput, IdErrorDiv, '', false);
  }
});

// Telephone
let telephoneInput = document.querySelector('#input-telephone');
let telephoneErrorDiv = document.querySelector('.modal-checkout__telephone--error');

telephoneInput.addEventListener('input', e => {
  let inputValue = e.target.value;

  if (telephoneInput.value === '') {
    showError(telephoneInput, telephoneErrorDiv, 'Este campo no puede estar vacio');
  } 
  
  let regExp = /[A-z]/g;
  if (regExp.test(telephoneInput.value)) {
    showError(telephoneInput, telephoneErrorDiv, 'Error de formato, números solamente');
  } else {
    telephoneInput.value = inputValue.trim();
    showError(telephoneInput, telephoneErrorDiv, '', false);
  }
});

// identification email
let emailInput = document.querySelector('#input-email');
let emailErrorDiv = document.querySelector('.modal-checkout__email--error');

emailInput.addEventListener('input', e => {
  if (emailInput.value === '') {
    showError(emailInput, emailErrorDiv, 'Este campo no puede estar vacio');
  } else {
    showError(emailInput, emailErrorDiv, '', false);
  }
});

// Card number
let numberCard = document.querySelector('.card__number');
let numberCreditCardInput = document.querySelector('#input-creditcard');
let numberCreditCardErrorDiv = document.querySelector('.modal-checkout__creditcard--error');

numberCreditCardInput.addEventListener('input', e => {
  let inputValue = e.target.value;

  numberCard.textContent = numberCreditCardInput.value;
  if (numberCreditCardInput.value === '') {
    numberCard.textContent = '0000 0000 0000 0000';
  } 
  // Expresion regular que incluye las letras mayusculas y minusculas [A-z], de manera global "g"
  let regExp = /[A-z]/g;
  if (regExp.test(numberCreditCardInput.value)) {
    showError(numberCreditCardInput, numberCreditCardErrorDiv, 'Error de formato, números solamente');
  } else {
    numberCreditCardInput.value = inputValue.replace(/\s/g, '').replace(/([0-9]{4})/g, '$1 ').trim(); // reemplazamos los espacios por un string vacio
    showError(numberCreditCardInput, numberCreditCardErrorDiv, '', false);
  }
});

// Month
let monthCard = document.querySelector('.card__month');
let monthInput = document.querySelector('#cardMonth');
let monthErrorDiv = document.querySelector('.form__input-mm--error');

monthInput.addEventListener('input', () => {
  monthCard.textContent = monthInput.value;
  if (monthInput.value === '') {
    monthCard.textContent = '00';
  }
});

// Year
let yearCard = document.querySelector('.card__year');
let yearInput = document.querySelector('#cardYear');
let yearErrorDiv = document.querySelector('.form__input-yy--error');

yearInput.addEventListener('input', () => {
  yearCard.textContent = yearInput.value;
  if (yearInput.value === '') {
    yearCard.textContent = '00';
  }
});

// CVC 
let cvcCard = document.querySelector('.card-back__cvc');
let cvcInput = document.querySelector('#cardCVC');
let cvcErrorDiv = document.querySelector('.form__input-cvc--error');

cvcInput.addEventListener('input', () => {
  cvcCard.textContent = cvcInput.value;
  if (cvcInput.value === '') {
    cvcCard.textContent = '000';
  }
});


// Confirmar button
// let confirmButton = document.querySelector('.modal-checkout__button');
// confirmButton.addEventListener('click', e => {
//   e.preventDefault();
//   // name validation
//   verifyFilled(nameInput, nameErrorDiv);
//   // id number validation
//   verifyFilled(IdNumberInput, IdErrorDiv);
//   // telephone validation
//   verifyFilled(telephoneInput, telephoneErrorDiv);
//   // email validation
//   verifyFilled(emailInput, emailErrorDiv);
//   // credit card number validation
//   verifyFilled(numberCreditCardInput, numberCreditCardErrorDiv);
//   // month validation
//   if (Number.parseInt(monthInput.value, 10) > 0 && Number.parseInt(monthInput.value, 10) <= 12) {
//     showError(monthInput, monthErrorDiv, '', false);

//   } else {
//     showError(monthInput, monthErrorDiv, 'Mes incorrecto');
//   }
//   // year validation
//   verifyFilled(yearInput, yearErrorDiv);
//   // cvc validation
//   verifyFilled(cvcInput, cvcErrorDiv);
// })

// Auxiliar functions
const showError = (divInput, divError, errorMessage, show = true) => {
  if (show) {
    divError.textContent = errorMessage;
    divInput.style.borderColor = 'hsl(0, 100%, 66%)';
  } else {
    divError.textContent = errorMessage;
    divInput.style.borderColor = '#D3D3D3';
  } 
}

const verifyFilled = (divInput, divError) => {
  if (divInput.value.length > 0) {
    showError(divInput, divError, '', false);
    
  } else {
    showError(divInput, divError, 'Este campo no puede estar vacio');
    
  }
}