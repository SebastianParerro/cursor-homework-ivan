'use strict';

// Зробіть 25 квадратів розміру 50х50 пікселів кожен, зафарбовані у випадковий колір. Квадрати мають розташовуватись по 5 в ряд.
// Щоб квадрати з'явились на сторінці, необхідно викликати функцію generateBlocks();

const field = document.createElement('div');
field.className = 'field';
document.body.append(field);

const generateBlocks = () => {
	const squareSize = 50;

	for (let i = 0; i < 25; i++) {
		const square = document.createElement('div');
		square.className = 'square';
		const left = i % 5;
		const top = (i - left) / 5;
		square.style.left = `${left * squareSize}px`;
		square.style.top = `${top * squareSize}px`;
		square.style.background = '#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6);
		field.append(square);
	}
}

generateBlocks();

// Зробіть так, щоб квадрати змінювали колір раз на секунду.
// Щоб квадрати з'явились на сторінці та почали змінюватись, необхідно викликати функцію generateBlocksInterval().

const generateBlocksInterval = () => {
	setInterval(generateBlocks, 1000);
}

generateBlocksInterval();