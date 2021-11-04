const checkForError = (response) => {
	if (!response.ok) throw new Error(response.statusText);
		return response.json();
}

fetch("http://jsonplaceholder.typicode.com/posts", {
	method: 'POST',
	body: JSON.stringify({
		title: 'New post',
		body: 'Post body',
	})
})
	.then(checkForError)
	.then((response) => {
		console.log("Fetch:", response);
	})
	.catch((err) => {
		console.log("Error:", err);
	});

axios
	.post("http://jsonplaceholder.typicode.com/posts", {
		title: 'New post',
		body: 'Post body',
	})
	.then((response) => {
		console.log("Axios:", response.data);
	})
	.catch((err) => {
		console.log("Error:", err);
	});
