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

cardNumber.addEventListener('input', () => {
    let value = cardNumber.value;
    if (value.length <= 16) {
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