'use strict';

const students = [{
	name: "Tanya",
	course: 3,
	subjects: {
		math: [4, 4, 3, 4],
		algorithms: [3, 3, 3, 4, 4, 4],
		data_science: [5, 5, 3, 4]
	}
}, {
	name: "Victor",
	course: 4,
	subjects: {
		physics: [5, 5, 5, 3],
		economics: [2, 3, 3, 3, 3, 5],
		geometry: [5, 5, 2, 3, 5]
	}
}, {
	name: "Anton",
	course: 2,
	subjects: {
		statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
		english: [5, 3],
		cosmology: [5, 5, 5, 5]
	}
}];

/*1. Створіть функцію getSubjects(students[0] --> ["Math", "Algorithms", "Data science"] - яка повертає список предметів для конкретного студента.
Зверніть увагу – назву предмету необхідно повертати з великої літери, а _ – замінити на пробіл */

const getSubjects = (student) => {
	const array = [];

	for (const key in student.subjects) {
		let subject = key.charAt(0).toUpperCase() + key.substr(1);
		subject = subject.split('_').join(' ');
		array.push(subject);
	}

	return array;
}

console.log('Функція 1:', getSubjects(students[0]));


/*2. Створіть функцію getAverageMark(students[0]) --> 3.79 – яка поверне середню оцінку по усім предметам для переданого студента НЕ МАСИВА СТУДЕНТІВ.
Оцінку округліть до 2ого знаку. Можна використовувати функції, написані у попередніх домашніх завданнях :) */

const getAverageMark = (student) => {
	const marks = [];
	let averageMark;

	for (const key in student.subjects) {
		marks.push(...student.subjects[key]);
		averageMark = marks.reduce((sum, mark) => (sum + mark)) / marks.length;
	}

	return +averageMark.toFixed(2);
}

console.log('Функція 2:', getAverageMark(students[0]));


/*3. Створіть функцію getStudentInfo(students[0]) --> { "course": 3, "name": "Tanya", "averageMark": 3.79} – яка повертає інформацію загального виду по
переданому студенту (вам знадобиться функція з попереднього завдання). Повинна бути виведена інформація: курс, ім'я, середня оцінка. */

const getStudentInfo = (student) => {
	return {
		course: student.course,
		name: student.name,
		averageMark: getAverageMark(student)
	}
}

console.log('Функція 3:', getStudentInfo(students[0]));


//4. Ствроіть функцію getStudentsNames(students) --> ["Anton", "Tanya, "Victor"] – яка повертає імена студентів у алфавітному порядку.

const getStudentsNames = (students) => students.map(item => item.name).sort();

console.log('Функція 4:', getStudentsNames(students));


//5. Створіть функцію getBestStudent(students) --> "Anton" – яка повертає кращого студента зі списку по показнику середньої оцінки.

const getBestStudent = (students) => students.reduce((acc, item) => getAverageMark(acc) > getAverageMark(item) ? acc : item).name;

console.log('Функція 5:', getBestStudent(students));


/*6. Створіть функцію calculateWordLetters("тест") --> { "т": 2, "е": 1, "с": 1 } – яка повертає обє'кт, в якому ключі це букви у слові, 
а значення – кількість їх повторень. */

const calculateWordLetters = (word) => [...word].reduce((acc, n) => (acc[n] = (acc[n] || 0) + 1, acc), {});

console.log('Функція 6:', calculateWordLetters("тест"));