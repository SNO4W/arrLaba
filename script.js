// 1
let arr = [1, 2, 3, 4, 5];
arr.splice(3, 0, 'a', 'b', 'c');
console.log(arr); 


// 2
let obj = { js: 'test', jq: 'hello', css: 'world' };
let keys = Object.keys(obj);
console.log(keys);


// 3
let str = 'http://example.com';
let startsWithHTTP = str.startsWith('http://');
console.log(startsWithHTTP); 


// 4
let str2 = 'example.html';
let endsWithHTML = str2.endsWith('.html');
console.log(endsWithHTML); 


// 5
let str3 = '123456';
let reversedStr = str3.split('').reverse().join('');
console.log(reversedStr); 


// 6
const inputString = 'var_test_text';

function toCamelCase(str) {
    const words = str.split('_');

    const capitalizedWords = words.map((word, index) => {
        return index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1);
    });

    return capitalizedWords.join('');
}

const camelCaseString = toCamelCase(inputString);
console.log(camelCaseString); 



// 7
const arr2 = ['я', 'учу', 'javascript', '!'];

const result = arr2.map((word, index) => {
  if (index < arr2.length - 2) {
    return word.toUpperCase() + ' ';
  } else {
    return word.toUpperCase();
  }
}).join('');

console.log(result); 


// 8
let date = '2025-12-31';
let formattedDate = date.split('-').reverse().join('/');
console.log(formattedDate);


// 9
const fullName = 'Иван Иванович Иванов';
const surname = 'Иванов';
let parts2 = fullName.split(' ');
if (parts2[parts2.length - 1] === surname) {
    let movedSurname = parts2.pop();
    parts2.unshift(movedSurname);
}
console.log(parts2.join(' ')); 


// 10
function arraysAreEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }

    const sortedArr1 = arr1.slice().sort();
    const sortedArr2 = arr2.slice().sort();

    // Сравниваем отсортированные массивы
    return sortedArr1.every((element, index) => element === sortedArr2[index]);
}

const array1 = [1, 2, 3];
const array2 = [1, 2, 3];
const array3 = [1, 2, 4];

console.log(arraysAreEqual(array1, array2)); 
console.log(arraysAreEqual(array1, array3)); 


//11
const countries = [
  "Узбекистан", "Таджикистан", "Азербайджан", "Кыргызстан", "Россия", 
  "Грузия", "Армения", "Казахстан", "Турция", "Китай", "Италия"
];

const input = document.getElementById('autocomplete-input');
const autocompleteList = document.getElementById('autocomplete-list');

//через div

input.addEventListener('input', function() {
    const inputValue = this.value.toLowerCase();
    autocompleteList.innerHTML = '';

    const filteredCountries = countries.filter(country => country.toLowerCase().startsWith(inputValue));

    filteredCountries.forEach(country => {
        const option = document.createElement('div');
        option.textContent = country;
        autocompleteList.appendChild(option);
    });
});

autocompleteList.addEventListener('click', function(event) {
    if (event.target.tagName === 'div') {
        input.value = event.target.textContent;
        autocompleteList.innerHTML = '';
    }
});

document.addEventListener('click', function(event) {
    if (event.target !== input) {
        autocompleteList.innerHTML = '';
    }
});


//через select

// input.addEventListener('input', function() {
//     const inputValue = this.value.toLowerCase();
//     autocompleteList.innerHTML = '';

//     const filteredCountries = countries.filter(country => country.toLowerCase().startsWith(inputValue));

//     filteredCountries.forEach(country => {
//         const option = document.createElement('option');
//         option.textContent = country;
//         autocompleteList.appendChild(option);
//     });

//     // Показать или скрыть список в зависимости от содержимого поля ввода
//     if (inputValue) {
//         autocompleteList.style.display = 'block';
//     } else {
//         autocompleteList.style.display = 'none';
//     }
// });

// autocompleteList.addEventListener('change', function(event) {
//     input.value = event.target.value;
//     autocompleteList.style.display = 'none'; // Скрыть список после выбора
// });

// document.addEventListener('click', function(event) {
//     if (event.target !== input && event.target !== autocompleteList) {
//         autocompleteList.style.display = 'none'; // Скрыть список при клике вне поля ввода и списка
//     }
// });


