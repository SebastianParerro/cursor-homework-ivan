'use strict';

// Створіть функцію, яка повертає проміс getRandomChinese(length). Функція працює таким чином:

// Запускається цикл(підказка: можна використовувати while) length раз, кожен прохід циклу дивимось на останні 5 цифр результату виклику методу Date.now(). 
// Наприклад отримали const sign = 16086;.
// Конвертуємо отриману цифу в рядок String.fromCharCode(sign); та чекаємо 50 ms
// Функція gerRandomChinese(length) повинна повернути рядок довжиною (length) з китайськими ієрогліфами. Час роботи проміса має складати length * 50ms.
// (Якщо викликати getRandomChinese(4), отримаємо результат "촛궻簽紙" за 200ms

function getRandomChinese(length) {
	return new Promise(function (resolve, reject) {
		let i = 0;
		const str = [];

		while (i < length) {
			setTimeout(() => {
				const sign = Date.now() % 100000;
				const symbol = String.fromCharCode(sign);
				str.push(symbol)

				if (str.length === length) {
					resolve(str);
				}
			}, i * 50);

			i++;
		}
	});
};

getRandomChinese(4).then((result) => {
	console.log(result.join(''));
});

//проба