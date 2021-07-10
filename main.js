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
// function palindrome(word) {
//     const string = word.split('').reverse().join('');
//     if (word === arr) {
//         return 'true';
//     }
//     else {
//         return 'false';
//     }
// }
// console.log(palindrome('Ilya'));

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
// const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];
// const pColor = document.querySelectorAll('p');
// const changeColor = () => {
//     let i = 0;
//     return (e) => {
//         e.target.style.color = colors[i];
//         i++;
//         if (i >= colors.length) {
//             i = 0;
//         }
//     }
// }
// pColor.forEach((item) => {
//     const painter = changeColor();
//     item.addEventListener('click', painter);
// })

//5--1
// Преобразование формата даты:
// в переменной date лежит дата в формате '2020-11-26';
// преобразуйте эту дату в формат '26.11.2020';
// функция должна быть универсальной, т.е. принимать любую дату и приводить ее к поставленному в задании формату.
const date = '2020-11-26';
const dateArray = date.split("-");
const newDate = dateArray[2] + '.' + dateArray[1] + '.' + dateArray[0];
console.log(newDate);

//5--2 Поиск объектов размещения
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

//6--1
const palindrome = (word) => word === word.split('').reverse().join('');
console.log(palindrome('Ivan'));

//6--2
const hotels = [
    {
      name: 'Hotel Leopold',
      city: 'Saint Petersburg',
      country: 'Russia',
    },
    {
      name: 'Apartment Sunshine',
      city: 'Santa Cruz de Tenerife',
      country: 'Spain',
    },
    {
      name: 'Villa Kunerad',
      city: 'Vysokie Tatry',
      country: 'Slowakia',
    },
    {
      name: 'Hostel Friendship',
      city: 'Berlin',
      country: 'Germany',
    },
    {
      name: 'Radisson Blu Hotel',
      city: 'Kyiv',
      country: 'Ukraine',
    },
    {
      name: 'Paradise Hotel',
      city: 'Guadalupe',
      country: 'Mexico',
    },
    {
      name: 'Hotel Grindewald',
      city: 'Interlaken',
      country: 'Switzerland',
    },
    {
      name: 'The Andaman Resort',
      city: 'Port Dickson',
      country: 'Malaysia',
    },
    {
      name: 'Virgin Hotel',
      city: 'Chicago',
      country: 'USA',
    },
    {
      name: 'Grand Beach Resort',
      city: 'Dubai',
      country: 'United Arab Emirates',
    },
    {
      name: 'Shilla Stay',
      city: 'Seoul',
      country: 'South Korea',
    },
    {
      name: 'San Firenze Suites',
      city: 'Florence',
      country: 'Italy',
    },
    {
      name: 'The Andaman Resort',
      city: 'Port Dickson',
      country: 'Malaysia',
    },
    {
      name: 'Black Penny Villas',
      city: 'BTDC, Nuca Dua',
      country: 'Indonesia',
    },
    {
      name: 'Koko Hotel',
      city: 'Tokyo',
      country: 'Japan',
    },
    {
      name: 'Ramada Plaza',
      city: 'Istanbul',
      country: 'Turkey',
    },
    {
      name: 'Waikiki Resort Hotel',
      city: 'Hawaii',
      country: 'USA',
    },
    {
      name: 'Puro Hotel',
      city: 'Krakow',
      country: 'Poland',
    },
    {
      name: 'Asma Suites',
      city: 'Santorini',
      country: 'Greece',
    },
    {
      name: 'Cityden Apartments',
      city: 'Amsterdam',
      country: 'Netherlands',
    },
    {
      name: 'Mandarin Oriental',
      city: 'Miami',
      country: 'USA',
    },
    {
      name: 'Concept Terrace Hotel',
      city: 'Rome',
      country: 'Italy',
    },
    {
      name: 'Ponta Mar Hotel',
      city: 'Fortaleza',
      country: 'Brazil',
    },
    {
      name: 'Four Seasons Hotel',
      city: 'Sydney',
      country: 'Australia',
    },
    {
      name: 'Le Meridien',
      city: 'Nice',
      country: 'France',
    },
    {
      name: 'Apart Neptun',
      city: 'Gdansk',
      country: 'Poland',
    },
    {
      name: 'Lux Isla',
      city: 'Ibiza',
      country: 'Spain',
    },
    {
      name: 'Nox Hostel',
      city: 'London',
      country: 'UK',
    },
    {
      name: 'Leonardo Vienna',
      city: 'Vienna',
      country: 'Austria',
    },
    {
      name: 'Adagio Aparthotel',
      city: 'Edinburgh',
      country: 'UK',
    },
    {
      name: 'Steigenberger Hotel',
      city: 'Hamburg',
      country: 'Germany',
    },
  ];
  const searchData2 = (stringSearch) => {
      const hotelsResult = [];
      hotels.forEach((item)=> {
          const str = `${item.name}, ${item.city}, ${item.country}`;
          if (str.includes(stringSearch)){
              hotelsResult.push(str);
          }
      });
      return hotelsResult;
  }
  console.log(searchData2('Hamburg'));

  //6--3
  const hotels2 = [
    {
      name: 'Hotel Leopold',
      city: 'Saint Petersburg',
      country: 'Russia',
    },
    {
      name: 'Apartment Sunshine',
      city: 'Santa Cruz de Tenerife',
      country: 'Spain',
    },
    {
      name: 'Villa Kunerad',
      city: 'Vysokie Tatry',
      country: 'Slowakia',
    },
    {
      name: 'Hostel Friendship',
      city: 'Berlin',
      country: 'Germany',
    },
    {
      name: 'Radisson Blu Hotel',
      city: 'Kyiv',
      country: 'Ukraine',
    },
    {
      name: 'Paradise Hotel',
      city: 'Guadalupe',
      country: 'Mexico',
    },
    {
      name: 'Hotel Grindewald',
      city: 'Interlaken',
      country: 'Switzerland',
    },
    {
      name: 'The Andaman Resort',
      city: 'Port Dickson',
      country: 'Malaysia',
    },
    {
      name: 'Virgin Hotel',
      city: 'Chicago',
      country: 'USA',
    },
    {
      name: 'Grand Beach Resort',
      city: 'Dubai',
      country: 'United Arab Emirates',
    },
    {
      name: 'Shilla Stay',
      city: 'Seoul',
      country: 'South Korea',
    },
    {
      name: 'San Firenze Suites',
      city: 'Florence',
      country: 'Italy',
    },
    {
      name: 'The Andaman Resort',
      city: 'Port Dickson',
      country: 'Malaysia',
    },
    {
      name: 'Black Penny Villas',
      city: 'BTDC, Nuca Dua',
      country: 'Indonesia',
    },
    {
      name: 'Koko Hotel',
      city: 'Tokyo',
      country: 'Japan',
    },
    {
      name: 'Ramada Plaza',
      city: 'Istanbul',
      country: 'Turkey',
    },
    {
      name: 'Waikiki Resort Hotel',
      city: 'Hawaii',
      country: 'USA',
    },
    {
      name: 'Puro Hotel',
      city: 'Krakow',
      country: 'Poland',
    },
    {
      name: 'Asma Suites',
      city: 'Santorini',
      country: 'Greece',
    },
    {
      name: 'Cityden Apartments',
      city: 'Amsterdam',
      country: 'Netherlands',
    },
    {
      name: 'Mandarin Oriental',
      city: 'Miami',
      country: 'USA',
    },
    {
      name: 'Concept Terrace Hotel',
      city: 'Rome',
      country: 'Italy',
    },
    {
      name: 'Ponta Mar Hotel',
      city: 'Fortaleza',
      country: 'Brazil',
    },
    {
      name: 'Four Seasons Hotel',
      city: 'Sydney',
      country: 'Australia',
    },
    {
      name: 'Le Meridien',
      city: 'Nice',
      country: 'France',
    },
    {
      name: 'Apart Neptun',
      city: 'Gdansk',
      country: 'Poland',
    },
    {
      name: 'Lux Isla',
      city: 'Ibiza',
      country: 'Spain',
    },
    {
      name: 'Nox Hostel',
      city: 'London',
      country: 'UK',
    },
    {
      name: 'Leonardo Vienna',
      city: 'Vienna',
      country: 'Austria',
    },
    {
      name: 'Adagio Aparthotel',
      city: 'Edinburgh',
      country: 'UK',
    },
    {
      name: 'Steigenberger Hotel',
      city: 'Hamburg',
      country: 'Germany',
    },
  ];
  const countryToCity = (arr5) => {
      const selectedCountry = {};
      for (key in arr5) {
          if (!selectedCountry[`${arr5[key].country}`]) {
              selectedCountry[`${arr5[key].country}`] = [];
              selectedCountry[`${arr5[key].country}`].push(`${arr5[key].city}`);
          }
          else {
              selectedCountry[`${arr5[key].country}`].push(`${arr5[key].city}`);
          }
      }
      return selectedCountry;
  }
  console.log(countryToCity(hotels2));

  //7--1
  const obj1 = {
    a: 'a',
    b: {
      a: 'a',
      b: 'b',
      c: {
        a: 1,
      },
    },
  };
  const obj2 = {
    b: {
      c: {
        a: 1,
      },
      b: 'b',
      a: 'a',
    },
    a: 'a',
  };
  const obj3 = {
    a: {
      c: {
        a: 'a',
      },
      b: 'b',
      a: 'a',
    },
    b: 'b',
  };
  
  const deepEqual = (obj1, obj2) => {
    if (obj1 === obj2) return true;
    if (
        typeof obj1 !== 'object' ||
        typeof obj2 !== 'object' ||
        obj1 == null ||
        obj2 == null
    ) {
        return false;
    }
    const keysA = Object.keys(obj1);
    const keysB = Object.keys(obj2);
    if (keysA.length !== keysB.length) {
        return false;
    }
    let result = true;
    keysA.forEach((key) => {
        if (!keysB.includes(key)) {
            result = false;
        }
        if (
            typeof obj1[key] === 'function' ||
            typeof obj2[key] === 'function'
        ) {
            if (obj1[key].toString() !== obj2[key].toString()) {
                result = false;
            }
        }
        if (!deepEqual(obj1[key], obj2[key])) {
            result = false;
        }
    });
    return result;
}
  console.log(deepEqual(obj1, obj2)); // true
  console.log(deepEqual(obj1, obj3)); // false

  ///8--1
  const studentsData = [
    {
      firstName: 'Василий',
      lastName: 'Петров',
      admissionYear: 2019,
      courseName: 'Java',
    },
    {
      firstName: 'Иван',
      lastName: 'Иванов',
      admissionYear: 2018,
      courseName: 'JavaScript',
    },
    {
      firstName: 'Александр',
      lastName: 'Федоров',
      admissionYear: 2017,
      courseName: 'Python',
    },
    {
      firstName: 'Николай',
      lastName: 'Петров',
      admissionYear: 2019,
      courseName: 'Android',
    }
  ];
  
  class User {
    constructor (params) {
      this.firstName = params.firstName;
      this.lastName = params.lastName;
    }
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  }
  class Student extends User {
    constructor (params) {
      super(params);
      this.admissionYear = params.admissionYear;
      this.courseName = params.courseName;
    }
    get course() {
      return new Date().getFullYear() - this.admissionYear;
    }
  }
  class Students {
    constructor(students) {
      this.students = students;
    }
  getInfo() {
    return this.students
    .sort(
    (student1, student2) =>
    new Student(student1).course - new Student (student2).course
    )
    .map(
    (student) =>
    `${new User(student).fullName} - ${
    new Student(student).courseName
    } - ${new Student(student).course}`
    );
  }
  }
  const students = new Students(studentsData);
  console.log(students.getInfo());
  //9--1
let colors = {
    data: ["magenta", "cyan", "firebrick", "springgreen", "skyblue"],
  };

colors[Symbol.iterator] = function() {
  let index = 0;
  let data = this.data;
  let last = this.data.length;
  return {
    next () {
      if (index < last) {
        return {
          done: false,
          value: data[index++],
        };
      }
      else {
        index = 0;
        return {
          done: true,
          value: data[index++],
        }
      }
    },
  };
};

const changeColor = (item) => {
  return (e) => {
    e.target.style.color = item.next().value;
  };
};

const pColor = document.querySelectorAll('p');

pColor.forEach((item) => {
  let i = colors[Symbol.iterator]();
  item.addEventListener ('click', changeColor(i));
});