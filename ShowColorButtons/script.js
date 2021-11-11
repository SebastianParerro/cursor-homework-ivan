'use strict';

const colors = (buttonNumber) => {
	const menuColors = document.createElement('div');
	menuColors.className = "menu";
	menuColors.id = `idColor${buttonNumber}`;
	menuColors.innerHTML = `
	<button class="size red" onclick="color(1)"></button>
	<button class="size orange" onclick="color(2)"></button>
	<button class="size yellow" onclick="color(3)"></button>
	<button class="size green" onclick="color(4)"></button>
	<button class="size cyan" onclick="color(5)"></button>
	<button class="size blue" onclick="color(6)"></button>
	<button class="size purple" onclick="color(7)"></button>
	`;
	const selectedColor = document.getElementsByClassName(`btn${buttonNumber}`)[0];// Вибираємо кнопку з вказаним класом та порядком [0]
	let left = selectedColor.getBoundingClientRect().left;// Отримуємо координати кнопки на яку наведений курсор
	let top = selectedColor.getBoundingClientRect().top;
	menuColors.style.left = left + 'px';// Присвоюємо отримані координати вспливаючій панелі
	menuColors.style.top = top + 'px';

	// console.log(selectedColor.getBoundingClientRect());
	document.body.append(menuColors);
}

const offColors = (buttonNumber) => {
	const idButton = document.getElementById(`idColor${buttonNumber}`);
	idButton.remove();
}