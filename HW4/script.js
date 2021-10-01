'use strict';

const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

/*1. Розділіть студентів на пари(хлопець + дівчина) для работи над проєктом.
У вас повинен вийти вкладений масив з парами студентів: [["Олександр", "Олена"], [..], [...]]; */

const getPairs = (students) => {
	const firstPair = [students[0], students[2]];
	const secondPair = [students[1], students[3]];
	const thirdPair = [students[4], students[5]];
	const pairs = [firstPair, secondPair, thirdPair];

	return pairs;
}

/*2. Зіставте пари з попереднього завдання та теми проєктів, над якими студенти будуть працювати.
Повинен вийти вкладений масив виду: [["Олександр і Олена", "Теорія автоматів"], [...], [...]] */
const getThemesWithPairs = (pairs, themes) => {
	const unitedPairs = pairs.map(pair => pair.join(' і '));
	const themesWithPairs = unitedPairs.map((pair, i) => [pair, themes[i]]);

	return themesWithPairs;
}

//3. Зіставте оцінки(marks) зі студентом(students): [["Саша", 4], [...], [...]]
const getStudentsWithMarks = (students, marks) => students.map((student, i) => [student, marks[i]]);

/*4 .Поставте кожній парі випадкову оцінку(від 1 до 5) за проєкт(тут функція буде нечистою, але не повинна мутувати массив):
 [["Олександр і Олена", "Теорія автоматів", 5], [...], [...]] */
const getThemesWithPairsAndMarks = (themesWithPairs) => themesWithPairs.map((themeWithPair) => [...themeWithPair, Math.round(Math.random() * (5 - 1) + 1)]);


const pairs = getPairs(students);
console.log(pairs);

const themesWithPairs = getThemesWithPairs(pairs, themes);
console.log(themesWithPairs);

const studentsWithMarks = getStudentsWithMarks(students, marks);
console.log(studentsWithMarks);

const themesWithPairsAndMarks = getThemesWithPairsAndMarks(themesWithPairs, marks);
console.log(themesWithPairsAndMarks);