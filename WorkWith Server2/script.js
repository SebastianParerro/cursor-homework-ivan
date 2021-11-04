const baseUrl = "https://the-one-api.dev/v2";
const config = {
	headers: {
		Authorization: "Bearer qRp9nwstFDK8M_g3PDvp"
	}
};
const list = document.getElementById("list");
const quotes = document.getElementById("quotes");
const page = document.getElementById("page");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
let currentPage = 1;
const limit = 2;

const getQuotes = (id) => {
	quotes.innerHTML = "loading...";
	axios
		.get(`${baseUrl}/movie/${id}/quote`, config)
		.then((response) => {
			if (response.data.total === 0) {
				quotes.innerHTML = "No quotes";
			} else {
				const listElems = response.data.docs.map(
					(item) => `<p>${item.dialog}</p>`
				);

				quotes.innerHTML = listElems.join("");
			}
		})
		.catch((err) => {
			console.log("Error:", err);
			quotes.innerHTML = "Error occured ;(";
		});
};
document.addEventListener("click", (evt) => {
	if (evt.target.className === "loadQuotes") {
		const { id } = evt.target.parentElement.dataset;
		getQuotes(id);
	}
});

const getMovies = () => {
	list.innerHTML = "loading...";
	page.innerHTML = currentPage;
	axios
		.get(`${baseUrl}/movie?page=${currentPage}&limit=${limit}`, config)
		.then((response) => {
			const listElems = response.data.docs.map(
				(item) => `
				<div class="movie" data-id="${item._id}">
					<h3>${item.name}</h3>
					<p>Budget in millions: ${item.budgetInMillions}</p>
					<button class="loadQuotes">Load quotes</button>
				</div>
			`
			);

			list.innerHTML = listElems.join("");
		})
		.catch((err) => {
			console.log("Error:", err);
			list.innerHTML = "Error occured :" + err.message;
		});
};

nextBtn.onclick = () => {
	currentPage += 1;
	getMovies();
}

prevBtn.onclick = () => {
	if (currentPage === 1) return;
	currentPage -= 1;
	getMovies();
}

getMovies();