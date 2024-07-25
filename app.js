let name = document.querySelector('#name');
let displayname = document.querySelector('#displayname');

function capitalizeWords(string) {
    return string
        .split(' ')  // Split the string by spaces
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))  // Capitalize each word
        .join(' ');  // Join the words back with spaces
}

name.addEventListener('input', () => {
    displayname.innerText = capitalizeWords(name.value);
});

let cardNumber = document.querySelector('#cardNumber');
let displaynumber = document.querySelector('#displaynumber');
let logo = document.querySelector('#logo');

cardNumber.addEventListener('input', () => {
    let value = cardNumber.value;
    console.log(value);
    if (value.length === 4) {

        if (value >= 1000 && value < 2000) {
            logo.src = 'img/visa.png';
        }
        else if (value >= 2000 && value < 3000) {
            logo.src = 'img/verve.png'
        }
        else if (value >= 3000 && value < 4000) {
            logo.src = 'img/union.png'
        }
        else if (value >= 4000 && value < 5000) {
            logo.src = 'img/dinners.png'
        }
        else if (value >= 5000 && value < 6000) {
            logo.src = 'img/discover.png'
        }
        else if (value >= 6000 && value < 7000) {
            logo.src = 'img/jcb.png'
        }
        else if (value >= 7000 && value < 8000) {
            logo.src = 'img/rupay.png'
        }
        else if (value >= 8000 && value < 9000) {
            logo.src = 'img/amex.png'
        }
        else if (value >= 9000 && value < 10000) {
            logo.src = 'img/maestro.png'
        }
        else {
            logo.src = 'img/maestro.png'
        }
    }
    if (value.length <= 16 && value != 'CARD NUMBER') {
        let display = '';
        for (let i = 0; i < value.length; i += 4) {
            if (i > 0) {
                display += ' ';
            }
            display += value.substr(i, 4);
        }
        displaynumber.innerText = display;
    }


});

let month = document.querySelector('#expiryMonth');
let year = document.querySelector('#expiryYear');
let displayexpiry = document.querySelector('#displayexpiry');

month.addEventListener('input', (e) => {
    let mon = e.target.value;
    if (mon.length < 3) {
        if (mon < 10) {
            displayexpiry.innerText = `0${mon}/`;
        }
        else {
            displayexpiry.innerText = `${mon}/`;
        }
    }
    console.log(displayexpiry.innerHTML);
})

year.addEventListener('input', (e) => {
    let ye = e.target.value;
    if (ye.length < 3) {
        if (ye > 23 && ye < 100) {
            displayexpiry.innerText = displayexpiry.innerHTML + ye;
        }
    }
})

let cvv = document.querySelector('#cvv');
let displaycvv = document.querySelector('#displaycvv');

cvv.addEventListener('input', () => {
    if (cvv.value < 1000) {
        displaycvv.innerText = cvv.value;
    }
})