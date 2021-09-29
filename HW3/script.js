'use strict';

//1. Найбільша цифра в числі
const getMaxDigit = (number) => {
	if (number === 0) {
		return 0;
	}
	else {
		const remainder = number % 10
		return Math.max(remainder, getMaxDigit((number - remainder) * 1e-1));
	}
}

//2. функція, яка визначає ступінь числа
const degreeOf = (x, y) => {
	let result = x;

	for (let i = 1; i < y; i++) {
		result *= x;
	};

	return result;
}

//3. функція, яка форматує ім'я, роблячи першу букву великою. ("влад" -> "Влад", "вЛАД" -> "Влад" і так далі);
const bigFirstLetter = (str) => str[0].toUpperCase() + str.slice(1).toLowerCase();

/*4. функція, яка вираховує суму, що залишається після оплати податку від зарабітньої плати.
(Податок = 18% + 1.5% -> 19.5%). Приклад: 1000 -> 805 */
const theSalaryWithoutTax = (theSalary) => {
	const tax = 18 + 1.5;
	const sum = theSalary - theSalary * tax / 100;

	return sum;
}

//5. функція, яка повертає випадкове ціле число в діапазоні від N до M. Приклад: getRandomNumber(1, 10) -> 5
const getRandomNumber = (min, max) => Math.round(Math.random() * (max - min + 1));

//6. Функція, яка рахує скільки разів певна буква повторюється в слові. Приклад: countLetter("а", "Асталавіста") -> 4
const countLetter = (letter, str) => {
	const newLetter = letter.toLowerCase();
	const newStr = str.toLowerCase()
	let sum = 0;

	for (let i = 0; i < newStr.length; i++) {
		if (newStr[i] === newLetter) {
			sum += 1;
		}
	}

	return sum;
}

/*7. Функція, яка конвертує долари в гривні та навпаки в залежності від наявності символа $ або UAH в рядку. 
Приклад: convertCurrency("100$") -> 2500 грн. або convertCurrency("2500UAH") -> 100$ */
const convertCurrency = (moneySystem) => {
	let money = parseInt(moneySystem);
	if (moneySystem.indexOf('$') !== -1) {
		money = money * 25;

		return `${money.toFixed(2)} грн.`;
	}

	if (moneySystem.indexOf('UAH') !== -1) {
		money = money / 25;

		return `${money.toFixed(2)} $`
	}
}

/*8. Функція генерації випадкового паролю (тільки числа), довжина встановлюється користувачем або по замовчуванню = 8 символам.
Приклад: getRandomPassword(4) -> 1875, getRandomPassword() -> 87240124 */
const getRandomPassword = (lengthPassword = 8) => {
	const min = 10 ** (lengthPassword - 1);
	const max = (10 ** lengthPassword) - 1;
	const rand = Math.random() * (max - min + 1);

	return Math.round(rand) + min;
}

//9. функція, яка видаляє всі букви з речення. Приклад: deleteLetters('a', "blablabla") -> "blblbl"
const deleteLetters = (letter, str) => str.replaceAll(letter, '');


/*10. Функція, яка перевіряє, чи є слово паліндромом. Приклад: isPalyndrom("мадам") -> true, isPalyndrom("кокос")
-> false, isPalyndrom("Я несу гусеня") -> true */
const isPalyndrom = (str) => {
	const strWithSmallLetters = str.toLowerCase();
	const alphabet = 'абвгґдеєжзиіїйклмнопрстуфхцчшщьюяабвгдеёжзийклмнопрстуфхцчшщъыьэюяabcdefghijklmnopqrstuvwxyz';
	let normal = '';
	let reversed = '';

	for (const char of strWithSmallLetters) {
		if (alphabet.includes(char)) {
			normal += char;
			reversed = char + reversed;
		}
	}

	return normal === reversed;
}

/*11. функцію, яка видалить з речення букви, які зустрічаються більше 1 разу.
Приклад: deleteDuplicateLetter("Бісквіт був дуже ніжним") -> "сктдеим" */
const deleteDuplicateLetter = (str) => {
	let result = '';
	const newStr = str.toLowerCase();

	for (let i = 0; i < newStr.length; i++) {
		if ((newStr.split(newStr[i]).length - 1) === 1 && newStr[i] !== ' ') {
			result += newStr[i];
		}
	}

	return result;
}


console.log(`Функція №1: ${getMaxDigit(1236)}`);
console.log(`Функція №2: ${degreeOf(2, 6)}`);
console.log(`Функція №3: ${bigFirstLetter('вЛАД')}`);
console.log(`Функція №4: ${theSalaryWithoutTax(1000)}`);
console.log(`Функція №5: ${getRandomNumber(1, 10)}`);
console.log(`Функція №6: ${countLetter('а', 'Асталавіста')}`);
console.log(`Функція №7: ${convertCurrency('91UAH')}`);
console.log(`Функція №8: ${getRandomPassword(6)}`);
console.log(`Функція №9: ${deleteLetters('a', 'blablabla')}`);
console.log(`Функція №10: ${isPalyndrom('Я несу гусеня')}`);
console.log(`Функція №11: ${deleteDuplicateLetter('Бісквіт був дуже ніжним')}`);