/* Необхідно написати програму, яка виконує складання чисел від N до M (N та M – задаються користувачем), а також програма має вміти пропускати парні числа.
Нижче приведено алгоритм, що потрібно зробити. */

let N;
do {
	N = +prompt('Введіть число N', ' ');
} while (!Number.isInteger(N));

let M;
do {
	M = +prompt('Введіть число M', ' ');
} while (!Number.isInteger(M));

const skipEvenNumbers = confirm("Потрібно пропускати парні числа?");

let sum = 0;
for (let i = N; i <= M; i++) {
	if (skipEvenNumbers && i % 2 === 0) {
		continue;
	} else {
		sum += i;
	}
}
console.log(sum);