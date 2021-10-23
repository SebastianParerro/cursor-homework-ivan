'use strict';

// У цьому завданні вам необхідно створити клас Student та розробляти методи всередині цього класу.
// 1. У стдентів повинні бути наступні властивості: university, course, fullName, вони передаються при створенні студента(в конструктор).
/* 2. Створіть метод this.getInfo() -> "Студент 1го курсу Вищої Школи Психотерапії м.Одеса, Остап Родоманський Бендер", метод повертає сукупну інформацію про курс,
учбовий заклад та імені студента. */
// 3. Створіть геттер оцінок this.marks, який повертає масив оцінок студента [5, 4, 4, 5]
/* 4. Створіть сеттер оцінок this.marks = 5, який дозволяє поставити оцінку студенту. Після того, як оцінка поставлена, геттер повинен повернути масив
this.marks -> [5, 4, 4, 5, 5] */
// 5. Створіть метод отримання середнього балу this.getAverageMark() -> 4.6 
/* 6. Створіть метод this.dismiss, який "виключить" студента. Після виклику цього методу – ставити студенту оцінки та отримувати їх більше не можна.
(Ніяких помилок, просто повертається завжди null замість масиву оцінок) */
//7. Створіть метод this.recover, який дозволить поновити студента

class Student {
	constructor(university, course, fullName) {
		this.university = university;
		this.course = course;
		this.fullName = fullName;
		this.marks = [];
		this.isDismiss = false;
	}

	getInfo() {
		return `Студент ${this.course}го курсу ${this.university}, ${this.fullName}`;
	}

	get getMarks() {
		if (this.isDismiss) {
			return null;
		}

		return this.marks;
	}

	set setMark(mark) {//????
		if (this.isDismiss) {
			return null;
		}
		this.marks.push(mark); s
	}

	getAverageMark() {
		if (this.isDismiss) {
			return null;
		}
		const averageMark = this.marks.reduce((sum, mark) => (sum + mark), 0) / this.marks.length;

		return +averageMark.toFixed(1);
	}

	dismiss() {
		this.isDismiss = true;
	}

	recover() {
		this.isDismiss = false;
	}
}

const student = new Student('Вищої Школи Психотерапії м.Одеса', 1, 'Остап Бендер');
student.setMark = 5;
student.setMark = 4;
student.setMark = 4;
student.setMark = 5;

student.dismiss();

console.log(`Студент ${student.fullName} відрахований.`);

console.log(student.getInfo());
console.log(student.getMarks);
console.log(`Середній бал: ${student.getAverageMark()}`);
console.log('');

student.recover();

console.log(`Студент ${student.fullName} відновлений.`);
console.log(student.getInfo());


student.setMark = 5;
console.log(`Студент ${student.fullName} отримав ще одну оцінку.`);
console.log(student.getMarks);
console.log(`Середній бал: ${student.getAverageMark()}`);
console.log('');


//ADVANCED
// 1. Створіть новий клас BudgetStudent, який повністю наслідує клас Student
/* 2. Бюджетний студент може отримати стипендію за допомогою методу this.getScholarship.Отримання стипендії супроводжується виведенням інформації в консоль:
Ви отримали 1400 грн.стипендії */
// 3. Метод отримання стипендії автоматично викликається кожні 30 секунд післе створення об'єкту. Підказка: викликайте його в constructor
// 4. Студент отримує стипендію тільки в тому випадку, якщо середній бал у нього вище або дорівнює 4.0
// 5. Якщо студента виключено, він не отримує стипендію(думаю це було і так очевидно : ))

class BudgetStudent extends Student {
	constructor(university, course, fullName) {
		super(university, course, fullName);
		setInterval(this.getScholarship.bind(this), 30000);
	}

	getScholarship() {
		if (this.getAverageMark() >= 4) {
			console.log('Ви отримали 1400 грн.стипендії');
		}
	}
}

const studentBudget = new BudgetStudent('Вищої Школи Психотерапії м.Одеса', 1, 'Остап Бендер');
studentBudget.setMark = 5;