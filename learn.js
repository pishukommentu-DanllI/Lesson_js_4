'use strict';


// Слайд 29

// задание 1
// let words = ['Привет, ', 'мир', '!'];
// console.log(words.join(''));

// задание 2
// let words = ['Привет, ', 'мир', '!'];
// let text = words.join('');
// console.log(text);

// задание 3
// let words = ['Привет, ', 'мир'];
// words[0] = 'пока';

// задание 4
// let obj = {
//     Петя: 200,
//     Коля: 300
// }
// 
// for (let key in obj) {
//     console.log(`Зарплата у ${key} = ${obj[key]}`);
// }

// задание 5
// var arr = {
//     'ru': ['голубой', 'красный', 'зеленый'],
//     'en': ['blue', 'red', 'green'],
// };
// console.log(arr.ru[1]);

// Слайд 30

// задание 1
// let arr = ['a', 'b', 'c'];
// alert(arr);

// задание 2
// let arr = ['a', 'b', 'c'];
// for (let item of arr) {
//     alert(item);
// }

// задание 3
// let arr = ['a', 'b', 'c', 'd'];
// alert(`${arr[0]}+${arr[1]}, ${arr[2]}+${arr[3]}`)


// задание 4
// let arr = [2, 5, 3, 9];
// let result = arr[0] * arr[1] + arr[2] * arr[3];
// alert(result); 


// здание 5
// var obj = {a: 1, b: 2, c: 3};

// alert(obj.c);
// alert(obj['c']);



// задание 6
// var obj = {Коля: '1000', Вася: '500', Петя: '200'};

// for (let key in obj) {
//     alert(obj[key]);
// }

// задание 7
// let week_days_number = {
//     1: "monday",
//     2: "Tuesday",
//     3: "Wednesday",
//     4: "Thursday",
//     5: "Friday",
//     6: "Saturday",
//     7: "Sunday"
// }
// alert(week_days_number['5']);

// задание 8
// let day = '5'
// let week_days_number = {
//     1: "Monday",
//     2: "Tuesday",
//     3: "Wednesday",
//     4: "Thursday",
//     5: "Friday",
//     6: "Saturday",
//     7: "Sunday"
// }
// alert(week_days_number[String(day)]); //перевод day в строку на всякий, если вдруг в day окажется число


// Слайд 31

// задание 1
// let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// alert(arr[1][0]);

// задание 2
// let obj = {
//     js: ['jQuery', 'Angular'], 
//     php: 'hello',
//     css: 'world'
// }
// console.log(obj.js[0]);

// задание 3
// var arr = {
//         'ru': ['понедельник', 'вторник', 'среда', 'четверг', 'пятница'],
//         'en': ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
// };
// console.log(arr['ru'][0], arr['en'][2]);

// задание 4
// let day = 3;
// let lang = 'ru';

// var arr = {
//         'ru': ['понедельник', 'вторник', 'среда', 'четверг', 'пятница'],
//         'en': ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
// };
// console.log(arr[lang][--day]);