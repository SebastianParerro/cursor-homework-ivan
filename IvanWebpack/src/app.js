import { getTotal } from "./utils";
import { rate } from "./test";
import "./test.css";
import Block from "./block.html";
import cat from "./cat.jpg";

const testVar = 100;
const anotherTestCar = 100;
console.log(testVar + anotherTestCar);
console.log("test");
if (testVar) {
	console.log("СМОТРИШЬ?");
}

@annotation
class Example {
	name = 'Test Name'
}

function annotation(target) {
	target.annotated = true;
}

const test = new Example();
console.log(JSON.stringify(test));
const products = [{
	price: 100,
	count: 2
}];

console.log(getTotal(products));
console.log(cat);

document.body.innerHTML = Block;
document.body.innerHTML += `
	<p>
		<img alt="CAT" src="${cat}"/>
	</p>
`;