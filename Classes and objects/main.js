/*-----------------------------  Классы и объекты  -----------------------------------*/

/* Массив */
let arr = [1,2,3,4];

//Фильтрация
let arrFilt = arr.filter((el) => el > 2);
console.log(arrFilt);

//Перебор элементов
arr.forEach((el) => {
	console.log(el);
});

//Перебор с выполнением действия
let arrMap = arr.map((el) => el ** 2);
console.log(arrMap);

//Подсчет суммы элементов массива
let arrRed = arr.reduce((sum, el) => sum + el);
console.log(arrRed);

let arrRedu = arr.reduce((str, el, i) => str + ++i + ': ' + el + ', ', '');
console.log(arrRedu);

//Разделение элементов массива
let arrJoin = arr.join(', ');
console.log(arrJoin);

//Объединение массивов
let arrConc = arr.concat([5,6], [7,8,9,10]);
console.log(arrConc);

//Создание нового массива из выбранного диапазона имеющегося
let arrSlice = arr.slice(0, 3);
console.log(arrSlice);

/* Сортировка массивов */
let arr1 = [2, 1, 10, -5, 19];

let arrSort = arr1.sort();
console.log(arrSort);

let arrSort1 = arr1.sort((el1, el2) => el1 - el2);
console.log(arrSort1);

/* Класс Date */
let date1 = new Date(2021, 0, 2, 21, 2); //Год, месяц, часы, минуты
console.log(date1);

let date2 = new Date('2021-02-25 21:04');
console.log(date2);

/* Класс Object */
let people = [
	firstPerson = {
		name: "Tom",
		age: 15
	},
	secondPerson = {
		name: "Alex",
		age: 20
	}
];

for(let i = 0; i < people.length; i++){
	console.log(people[i]);
} 
// Создание массива, вкючающего два объекта с внутренними данными, перебор
// и вывод их при помощи цикла

/* Добавленные свойства */

