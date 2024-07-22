let name = document.querySelector('#name');
let displayname = document.querySelector('#displayname');

// function capitalizeFirstLetter(string) {
//     return string.charAt(0).toUpperCase() + string.slice(1);
// }

// name.addEventListener('input', () => {
//     displayname.innerText = capitalizeFirstLetter(name.value);
// });

function capitalizeWords(string) {
    return string
        .split(' ')  // Split the string by spaces
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))  // Capitalize each word
        .join(' ');  // Join the words back with spaces
}

name.addEventListener('input', () => {
    displayname.innerText = capitalizeWords(name.value);
});