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