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
    let arr = word.split('').reverse().join('');
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