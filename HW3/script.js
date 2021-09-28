'use strict';

//1. Найбільша цифра в числі
function getMaxDigit(number) {
	if (number === 0) {
		return 0;
	}
	else {
		let remainder = number % 10
		return Math.max(remainder, getMaxDigit((number - remainder) * 1e-1));
	}
}

//2. функція, яка визначає ступінь числа
function degreeOf(x, y) {
	let result = x;

	for (let i = 1; i < y; i++) {
		result *= x;
	};

	return result;
}

//3. функція, яка форматує ім'я, роблячи першу букву великою
function bigFirstLetter(str) {
	return str[0].toUpperCase() + str.slice(1);
}

//4. функція, яка вираховує суму, що залишається після оплати податку від зарабітньої плати. (Податок = 18% + 1.5% -> 19.5%). Приклад: 1000 -> 805
function theSalaryWithoutTax(theSalary) {
	let tax = 18 + 1.5;
	let sum = theSalary - theSalary * tax / 100;

	return sum;
}

//5. функція, яка повертає випадкове ціле число в діапазоні від N до M. Приклад: getRandomNumber(1, 10) -> 5
function getRandomNumber(min, max) {
	let rand = min - 0.5 + Math.random() * (max - min + 1);
	return Math.round(rand);
}

//6. Функція, яка рахує скільки разів певна буква повторюється в слові. Приклад: countLetter("а", "Асталавіста") -> 4
function countLetter(letter, str) {
	let newLetter = letter.toLowerCase();
	let newStr = str.toLowerCase()
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
function convertCurrency(moneySystem) {
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
function getRandomPassword(lengthPassword) {
	let password;
	if (lengthPassword === undefined) {
		do {
			password = +parseInt(Math.random() * (10 ** 8));
		} while (password > 10 ** 8);
	} else {
		do {
			password = +parseInt(Math.random() * (10 ** lengthPassword));
		} while (password > 10 ** lengthPassword);
	}

	return password;
}





console.log(`Функція №1: ${getMaxDigit(1236)}`);
console.log(`Функція №2: ${degreeOf(2, 6)}`);
console.log(`Функція №3: ${bigFirstLetter('влад')}`);
console.log(`Функція №4: ${theSalaryWithoutTax(1000)}`);
console.log(`Функція №5: ${getRandomNumber(1, 10)}`);
console.log(`Функція №6: ${countLetter('а', 'Асталавіста')}`);
console.log(`Функція №7: ${convertCurrency('91UAH')}`);
console.log(`Функція №8: ${getRandomPassword(4)}`);