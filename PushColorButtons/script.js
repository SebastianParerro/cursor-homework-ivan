'use strict';

const showMenu = (buttonNumber) => {
	const menus = document.querySelectorAll(`.menu`);
	menus.forEach((item) => item.remove());// щоб видалити попередне меню, що з'явилося

	const menu = document.createElement('div');
	menu.className = "menu";
	menu.innerHTML = `
	<button class="size red" onclick="setColor(${buttonNumber}, 'red')"></button>
	<button class="size orange" onclick="setColor(${buttonNumber}, 'orange')"></button>
	<button class="size yellow" onclick="setColor(${buttonNumber}, 'yellow')"></button>
	<button class="size green" onclick="setColor(${buttonNumber}, 'green')"></button>
	<button class="size cyan" onclick="setColor(${buttonNumber}, 'cyan')"></button>
	<button class="size blue" onclick="setColor(${buttonNumber}, 'blue')"></button>
	<button class="size purple" onclick="setColor(${buttonNumber}, 'purple')"></button>
	`;
	const selectedButton = document.getElementsByClassName(`btn${buttonNumber}`)[0];// Вибираємо кнопку з вказаним класом та 1м за порядком у массиві [0]
	let left = selectedButton.getBoundingClientRect().left;// Отримуємо координати кнопки на яку наведений курсор
	let top = selectedButton.getBoundingClientRect().top;
	menu.style.left = left + 'px';// Присвоюємо отримані координати вспливаючій панелі
	menu.style.top = top + 'px';
	document.body.append(menu);
}

const setColor = (number, color) => {
	const button = document.getElementsByClassName(`btn${number}`)[0];
	button.style.backgroundColor = color;
};