import axios from "axios";

// function* myGenerator() {};
// const myGenerator = function* () {};
// const obj = { *myGenerator() { } };

// myGenerator() -> irerator -> iterator.next();



/* Example 1 */

// function* objectGenerator(objArg) {
// 	const keys = Object.keys(objArg);

// 	for (let key of keys) {
// 		yield [key, objArg[key]];
// 	}
// }

// const obj = { name: 'Ivan', gender: 'Male', age: 21 };

// for (let [key, value] of objectGenerator(obj)) {
// 	console.log(key, value);
// }



/* Example 2 */

// function* gen() {
// 	try {
// 		yield 1;
// 		yield 2;
// 		yield 3;
// 		yield 4;
// 	} catch (err) {
// 		console.log('Generator error: ', err)
// 	}
// }

// const g = gen();

// console.log(g.next());
// console.log(g.throw('Error :('));
// console.log(g.next());



/* Example 3 */

// function* delegGen(val) {
// 	yield val * 2;
// 	yield val * 3;
// 	yield val * 4;
// }

// function* gen() {
// 	const value = 10;
// 	yield value;
// 	yield* delegGen(value);
// }

// const g = gen();

// console.log(g.next());
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());



/* Example 4 */

// function* idGenerator() {
// 	let i = 0;

// 	while (true) {
// 		yield i++;
// 	}
// }

// const ids = idGenerator();

// console.log(ids.next().value);
// console.log(ids.next().value);
// console.log(ids.next().value);
// console.log(ids.next().value);
// console.log(ids.next().value);
// console.log(ids.next().value);



/* Example 5 */

// const getToDo = (id) => {
// 	return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
// }
// const getComments = (id) => {
// 	return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
// }

// function* asyncGenerator(id) {
// 	try {
// 		const data = yield getToDo(id);
// 		console.log('Data', data);
// 		const comments = yield getComments(id);
// 		console.log('Comments:', comments);
// 	} catch (err) {
// 		console.log('Error occured:', err);
// 	}
// }

// const iterator = asyncGenerator(1);
// const postPromice = iterator.next();
// postPromice.value.then((data) => {
// 	console.log('data', data);
// 	const commentsData = iterator.next(data);

// 	commentsData.value.then((comments) => {
// 		console.log('comments', comments);
// 		iterator.next(comments);
// 	})
// });



/* Example 6 */

const getToDo = (id) => {
	return axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
};
const getComments = (id) => {
	return axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
};

function* asyncGenerator(id) {
	try {
		const data = yield getToDo(id);
		console.log('Data', data);
		const comments = yield getComments(id);
		console.log('Comments:', comments);
	} catch (err) {
		console.log('Error occured:', err);
	}
}

const iterator = asyncGenerator(1);
const postPromice = iterator.next();
postPromice.value.then((response) => {
	console.log('data', response.data);
	const commentsData = iterator.next(response.data);

	commentsData.value.then((responseComments) => {
		console.log('comments', responseComments.data);
		iterator.next(responseComments.data);
	})
});