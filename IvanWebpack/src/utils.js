export const getTotal = (products) => {
	return products.reduce(
		(total, product) => product.count * product.price + total, 0
	);
};

export default () => {
	console.log("DEFAULT FUNC");
}