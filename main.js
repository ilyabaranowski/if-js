// 1
let user = 'John Doe';
console.log(user);
let student = 'Ilya';
console.log(student);
user = student; //student name (Ilya)
console.log(user);

//2
let test = 1;
test += "1"; //11
console.log(test);
test -= 1; //10
console.log(test);
test = Boolean(test); //true
console.log(test);

//3
const arr = [2, 3, 5, 8];
let result = 1;
for (i = 0; i < arr.length; i++) {
    result *= arr[i];
}
console.log(result);

//4
const arr2 = [2, 5, 8, 15, 0, 6, 20, 3];
for (i = 0; i < arr2.length; i++) {
    if (arr2[i] > 5 && arr2[i] < 10) {
        console.log(arr2[i])
    }
}

//5
const arr3 = [2, 5, 8, 15, 0, 6, 20, 3];
for (i = 0; i < arr3.length; i++) {
    if (arr3[i] % 2 == 0 && arr3[i] != 0) {
        console.log(arr3[i])
    }
}

//lesson-3--1
function palindrome(word) {
    const string = word.split('').reverse().join('');
    if (word === arr) {
        return 'true';
    }
    else {
        return 'false';
    }
}
console.log(palindrome('Ilya'));

//3--2
function min(a, b) {
    if (a < b) {
        return a;
    }
    else {
        return b;
    }
}
console.log(min(13, 17));

function min(a, b) {
    return a < b ? a : b;
}
console.log(min(545, 78));

function max(a, y) {
    if (a > y) {
        return a;
    }
    else {
        return y;
    }
}
console.log(max(54, 22));

function max(a, y) {
    return a > y ? a : y;
}
console.log(max(1, 13));

//3--3
const arr4 = [10, 34, 40, 77, 99, 20, 66, 68, 8, 0]
const changeZero = (arr4) => {
    for (i = 0; i < arr4.length; i++) {
        let strArr = '' + arr4[i];
        if (strArr.indexOf('0') !== -1) {
            arr4[i] = strArr.replaceAll('0', 'zero');
        }
    }
}
changeZero(arr4);
console.log(arr4);

//4--1
//Напишите функцию sum, которая возвращает сумму чисел следующим образом:
//console.log(sum(5)(2)); // 7
function sum(x) {
    return function (y) {
        return x + y;
    }
}
console.log(sum(5)(2));

//4--2
//Покрасьте абзацы по клику (событие click)
const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];
const pColor = document.querySelectorAll('p');
const changeColor = () => {
    let i = 0;
    return (e) => {
        e.target.style.color = colors[i];
        i++;
        if (i >= colors.length) {
            i = 0;
        }
    }
}
pColor.forEach((item) => {
    const painter = changeColor();
    item.addEventListener('click', painter);
})

//5--1
// Преобразование формата даты:
// в переменной date лежит дата в формате '2020-11-26';
// преобразуйте эту дату в формат '26.11.2020';
// функция должна быть универсальной, т.е. принимать любую дату и приводить ее к поставленному в задании формату.
const date = '2020-11-26';
const dateArray = date.split("-");
const newDate = dateArray[2] + '.' + dateArray[1] + '.' + dateArray[0];
console.log(newDate);

//Поиск объектов размещения
const data = [
    {
        country: 'Russia',
        city: 'Saint Petersburg',
        hotel: 'Hotel Leopold',
    },
    {
        country: 'Spain',
        city: 'Santa Cruz de Tenerife',
        hotel: 'Apartment Sunshine',
    },
    {
        country: 'Slowakia',
        city: 'Vysokie Tatry',
        hotel: 'Villa Kunerad',
    },
    {
        country: 'Germany',
        city: 'Berlin',
        hotel: 'Hostel Friendship',
    },
    {
        country: 'Indonesia',
        city: 'Bali',
        hotel: 'Ubud Bali Resort&SPA',
    },
    {
        country: 'Netherlands',
        city: 'Rotterdam',
        hotel: 'King Kong Hostel',
    },
    {
        country: 'Marocco',
        city: 'Ourika',
        hotel: 'Rokoko Hotel',
    },
    {
        country: 'Germany',
        city: 'Berlin',
        hotel: 'Hotel Rehberge Berlin Mitte',
    },
];
const dataSearch = (str) => {
    const resultSearch = [];
    for (let i = 0; i < data.length; i++) {
        const currentStr = `${data[i].country}, ${data[i].city}, ${data[i].hotel}`;
        if (currentStr.includes(str)) {
            resultSearch.push(currentStr);
        }
    }
    return resultSearch;
};
console.log(dataSearch('Rotterdam'))