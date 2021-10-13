'use strict';

/*1. Створіть функцію getRandomArray(length, min, max) – яка повертає масив випадкових цілих чисел. У функції є параметри: 
length - довжина масиву, min – мінімальне значення цілого числа, max – максимальне значення цілого числа. 
Приклад: getRandomArray(15, 1, 100) –> [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2] */

const getRandomArray = (length, min, max) => {
	const randomArray = [];

	for (let i = 0; i < length; i++) {
		randomArray.push(Math.round(Math.random() * (max - min) + min));
	}

	return randomArray;
}

console.log('Функція 1:', getRandomArray(15, 1, 100));


/*2. Створіть функцію getModa(...numbers) – яка вираховує моду всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
Приклад: getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 2 
ДВОМІРНИЙ МАСИВ 
Якщо мод декілька, виводиться тільки перше значення моди, було б круто, якби у випадку декількох мож, повертався масив з цими значеннями*/

// const getModa = (...numbers) => {
// 	const result = numbers.filter(number => Number.isInteger(number))
// 		.reduce((acc, element) => {
// 			if (!acc.length) {
// 				acc.push([element, 1]);
// 			} else {
// 				const index = acc.findIndex((item) => item[0] === element);

// 				if (index === -1) {
// 					acc.push([element, 1]);
// 				} else {
// 					acc[index][1]++
// 				}
// 			}

// 			return acc;
// 		}, []);

// 	return result.sort((a, b) => b[1] - a[1])[0][0]; //вывести в отсортированном по убыванию двухмерном массиве элемент с индексом [0][0] (тоесть первый)
// }

// console.log('Функція 2:', getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));

const getModa = (...numbers) => {
	const mods = [];
	const result = numbers.filter(number => Number.isInteger(number))
		.reduce((acc, element) => {
			if (!acc.length) {
				acc.push([element, 1]);
			} else {
				const index = acc.findIndex((item) => item[0] === element);

				if (index === -1) {
					acc.push([element, 1]);
				} else {
					acc[index][1]++
				}
			}

			return acc;
		}, []);

	result.sort((a, b) => b[1] - a[1]);
	console.log(result);
	mods.push(result[0][0]);

	for (let i = 1; i < result.length; i++) {
		if (result[0][1] === result[i][1]) {
			mods.push(result[i][0]);
		}
	}

	return mods;
}

console.log('Функція 2:', getModa(6, 2, 55, 11, 55, 2, 55, 77, 57, 87, 55, 2, 56, 3, 2));


/*3. Створіть функцію getAverage(...numbers) – яка рахує середнє арифметичне всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
Приклад: getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 34.4 */

const getAverage = (...numbers) => {
	return numbers.filter(number => Number.isInteger(number))
		.reduce((sum, number) => (sum + number)) / numbers.length;
}

console.log('Функція 3:', getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));


/*4. Створіть функцію getMedian(...numbers) – яка рахує медіану всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
Приклад: getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 23 Приклад: getMedian(1, 2, 3, 4) –> 2.5 Приклад: getMedian(1, 2, 3, 4, 5) –> 3 */

const getMedian = (...numbers) => {
	const sortedNumbers = numbers.filter(number => Number.isInteger(number))
		.sort((a, b) => a - b);
	const middleIndex = numbers.length / 2;

	if (numbers.length % 2 === 0) {
		return (sortedNumbers[middleIndex - 1] + sortedNumbers[middleIndex]) / 2;
	}

	return sortedNumbers[Math.floor(middleIndex)];
}

console.log('Функція 4:', getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));


/*5. Створіть функцію filterEvenNumbers(...numbers) – яка фільтрує парні числа передані як аргументи функції
Приклад: filterEvenNumbers(1, 2, 3, 4, 5, 6) -> [1, 3, 5] */

const filterEvenNumbers = (...numbers) => numbers.filter(number => number % 2 !== 0);

console.log('Функція 5:', filterEvenNumbers(1, 2, 3, 4, 5, 6));


/*6. Створіть функцію countPositiveNumbers(...numbers) – яка порахує кількість чисел більших 0
Приклад: countPositiveNumbers(1, -2, 3, -4, -5, 6) -> 3 */

const countPositiveNumbers = (...numbers) => {
	const positveNumber = numbers.reduce((sum, number) => {
		if (number > 0) {
			sum++;
		}

		return sum;
	}, 0);

	return positveNumber;
}

console.log('Функція 6:', countPositiveNumbers(1, -2, 3, -4, -5, 6));


/*7. Створіть функцію getDividedByFive(...numbers) – яка відфільтрує усі елементи в масиві та залишить тільки ті, які діляться на ціло на 5
Приклад: getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) -> [55, 55] */

const getDividedByFive = (...numbers) => numbers.filter(number => number % 5 === 0);

console.log('Функція 7:', getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));


/*8. Створіть функцію replaceBadWords(string) – яка 1) розіб'є фразу на слова, 2) замінить погані слова на зірочки (*).
При вирішенні цього завдання необхідно розбити масив на слова за допомогою функції .split(" "), після чого масив необхідно буде склеїти .join(" ") 
Погані слова: shit та fuck. Передбачте можливість розширювати список цих слів у майбутньому.
Приклад: replaceBadWords("Are you fucking kidding?") -> "Are you ****ing kidding?" Приклад: replaceBadWords("Holy shit!") -> "Holy ****!" 
Приклад: replaceBadWords("It's bullshit!") -> "It's bull****!" */

const replaceBadWords = (string) => {
	const badWords = ['shit', 'fuck'];
	let result = string;

	for (let i = 0; i < badWords.length; i++) {
		result = result.split(badWords[i]).join('****');
	}

	return result;
}

console.log('Функція 8:', replaceBadWords('Are you fucking kidding?'));


/*9. Створіть функцію divideByThree(word), яка розбиває кожне слово на умовні склади по 3 букви. Якщо букв менше трьох – не розбиває. 
Пробіли завжди видаляються. Рядок приводится до нижнього регістру. 
Приклад: divideByThree("Commander") -> ["com", "man", "der"]
Приклад: divideByThree("live") -> ["liv", "e"] */

const divideByThree = (word) => {
	let newWord = word.toLowerCase();
	let result = [];

	if (newWord.length > 3) {
		for (let i = 0; i < newWord.length; i += 3) {
			if (newWord.length - i >= 3) {
				result.push(newWord[i] + newWord[i + 1] + newWord[i + 2]);
			} else {
				result.push(newWord.substring(i));
			}
		}
	} else {
		result = newWord;
	}

	return result;
}

console.log('Функція 9:', divideByThree('Commander'));


/*10. Створіть функцію generateCombinations(word), яка видасть всі можливі перестановки(унікальні, без повторень) букв в слові. 
Для тестів не передавайте слова в яких більше 10 букв. Краще взагалі обмежити работу функції 10 буквами. 
Приклад: generateCombinations("man") -> ["man", "mna", "amn", "anm", "nam", "nma"] Приклад: generateCombinations("ol") -> ["ol", "lo"]
РЕКУРСІЯ */

let generateCombinations = (word) => {
	if (word.length > 10) {
		return 'Please enter a string with no more than 10 characters';
	} else {
		if (word.length < 2) {
			return word;
		}
	}
	const combinationsArray = [];

	for (let i = 0; i < word.length; i++) {
		let char = word[i];

		if (word.indexOf(char) != i) {
			continue;
		}
		const remainingChars = word.slice(0, i) + word.slice(i + 1, word.length);

		for (let combination of generateCombinations(remainingChars)) {
			combinationsArray.push(char + combination);
		}
	}

	return combinationsArray;
}

console.log('Функція 10:', generateCombinations("man"));