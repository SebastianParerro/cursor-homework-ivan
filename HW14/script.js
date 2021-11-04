const baseUrl = "https://swapi.dev/api";

const peopleHeader = document.getElementById("peopleHeader");
const list = document.getElementById("list");
const reciveBtn = document.getElementById("recive");
const page = document.getElementById("page");
const nextBtn = document.getElementById("next");
const ul = document.getElementById("ul");
let currentPage = 1;
let nextPage = 2;
const limit = 10;
let film = 2;
const wookieeBtn = document.getElementById("wookieeBtn");
let wookiee = false;
let peopleClicked = false;

const photo = {
	"https://swapi.dev/api/people/1/": "https://static.wikia.nocookie.net/rustarwars/images/d/d9/Luke-rotjpromo.jpg/revision/latest/scale-to-width-down/400?cb=20061127144734",
	"https://swapi.dev/api/people/2/": "https://img.discogs.com/asQcQW243t9t4jC4n4UUlaU7DoM=/600x600/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/A-376068-1574719343-4313.jpeg.jpg",
	"https://swapi.dev/api/people/3/": "https://upload.wikimedia.org/wikipedia/ru/3/39/R2-D2_Droid.png",
	"https://swapi.dev/api/people/4/": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Star_Wars_-_Darth_Vader.jpg/274px-Star_Wars_-_Darth_Vader.jpg",
	"https://swapi.dev/api/people/5/": "https://static.wikia.nocookie.net/rustarwars/images/8/83/Sw4-Leia2.png/revision/latest?cb=20170913054540",
	"https://swapi.dev/api/people/10/": "https://upload.wikimedia.org/wikipedia/en/thumb/3/32/Ben_Kenobi.png/220px-Ben_Kenobi.png",
	"https://swapi.dev/api/people/13/": "https://static.wikia.nocookie.net/starwars/images/4/48/Chewbacca_TLJ.png/revision/latest?cb=20210106001220",
	"https://swapi.dev/api/people/14/": "http://geekcity.ru/wp-content/uploads/2016/07/han-solo-episode-v.jpg",
	"https://swapi.dev/api/people/18/": "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Wedge_Antilles-Denis_Lawson-Star_Wars_%281977%29.jpg/220px-Wedge_Antilles-Denis_Lawson-Star_Wars_%281977%29.jpg",
	"https://swapi.dev/api/people/20/": "https://static.wikia.nocookie.net/rustarwars/images/d/d6/Yoda_SWSB.png/revision/latest?cb=20171222112613",
	"https://swapi.dev/api/people/21/": "https://upload.wikimedia.org/wikipedia/en/8/8f/Emperor_RotJ.png",
	"https://swapi.dev/api/people/22/": "https://upload.wikimedia.org/wikipedia/en/3/3e/FettbobaJB.png",
	"https://swapi.dev/api/people/23/": "https://static.wikia.nocookie.net/rustarwars/images/5/59/IG-88f.jpg/revision/latest?cb=20190226130253",
	"https://swapi.dev/api/people/24/": "https://static.wikia.nocookie.net/rustarwars/images/d/d2/Bossk.jpg/revision/latest?cb=20100212063334",
	"https://swapi.dev/api/people/25/": "https://m.media-amazon.com/images/M/MV5BMjI3MjA0NTQwOV5BMl5BanBnXkFtZTcwMzcxMTY2Mw@@._V1_.jpg",
	"https://swapi.dev/api/people/26/": "https://mikescollection.files.wordpress.com/2012/01/lobot2.jpg",
};

// ?format=wookiee
const getPeoples = () => {
	peopleHeader.classList.remove("hidden");
	list.innerHTML = "loading...";
	axios
		.get(`${baseUrl}/films/${film}/`)
		.then((response) => {
			list.innerHTML = "";
			response.data.characters.forEach(
				(url) => {
					axios
						.get(url)
						.then((response) => {
							const item = response.data;
							const listElem = `
							<div class="people">
								<img src="${photo[url]}" class="photo" alt="альтернативный текст">
									<h3>${item.name}</h3>
									<p>Дата народження: ${item.birth_year}</p>
									<p>Стать: ${item.gender === 'male' ? "&#9794;" : item.gender === 'female' ? "&#9792;" : "&#9898;"}
									</p>
							</div>
							`
							list.innerHTML = list.innerHTML + listElem;
						})
						.catch((err) => {
							console.log("Error:", err);
							list.innerHTML = "Error occured :(";
						});
				}
			)
		});
}

const getPlanets = () => {
	list.innerHTML = "loading...";
	page.innerHTML = currentPage;
	axios
		.get(`${baseUrl}/planets?page=${currentPage}&limit=${limit}`)
		.then((response) => {
			const planets = response.data.results.map(
				(item) => {
					return `<li>${item.name}</li>`;
				}
			);
			list.innerHTML = "";
			ul.innerHTML = planets.join("");

			if (response.data.next === null) {
				nextPage = null;
			}
		})
		.catch((err) => {
			console.log("Error:", err);
			list.innerHTML = "Error occured :(";
		});
};

const getPeoplesWookiee = () => {
	peopleHeader.classList.remove("hidden");
	list.innerHTML = "loading...";
	axios
		.get(`${baseUrl}/films/${film}?format=wookiee`)
		.then((response) => {
			list.innerHTML = "";
			response.data.characters.forEach(
				(url) => {
					axios
						.get(url)
						.then((response) => {
							const item = response.data;
							const listElem = `
							<div class="people">
								<img src="${photo[url]}" class="photo" alt="альтернативный текст">
									<h3>${item.name}</h3>
									<p>Дата народження: ${item.birth_year}</p>
									<p>Стать: ${item.gender === 'male' ? "&#9794;" : item.gender === 'female' ? "&#9792;" : "&#9898;"}
									</p>
							</div>
							`
							list.innerHTML = list.innerHTML + listElem;
						})
						.catch((err) => {
							console.log("Error:", err);
							list.innerHTML = "Error occured :(";
						});
				}
			)
		});
}

const getPlanetsWookiee = () => {
	list.innerHTML = "loading...";
	page.innerHTML = currentPage;
	axios
		.get(`${baseUrl}/planets?page=${currentPage}&limit=${limit}&format=wookiee`)
		.then((response) => {
			console.log(response.data);
			const planets = response.data["rcwochuanaoc"].map(
				(item) => {
					return `<li>${item.whrascwo}</li>`;
				}
			);
			list.innerHTML = "";
			ul.innerHTML = planets.join("");

			if (response.data.next === null) {
				nextPage = null;
			}
		})
		.catch((err) => {
			console.log("Error:", err);
			list.innerHTML = "Error occured :(";
		});
};

const search = () => {
	film = document.getElementById('input').value;
	console.log(film);
	getPeoples();
};

reciveBtn.onclick = () => {
	peopleClicked = true;
	if (!wookiee) {
		getPeoples();
	} else {
		getPeoplesWookiee();
	}

}

if (!wookiee) {
	getPlanets();
} else {
	getPlanetsWookiee();
}

nextBtn.onclick = () => {
	if (nextPage === null) return;
	currentPage += 1;

	if (!wookiee) {
		getPlanets();
	} else {
		getPlanetsWookiee();
	}
}

wookieeBtn.onclick = () => {
	wookiee = true;
	getPlanetsWookiee();

	if (peopleClicked) {
		getPeoplesWookiee();
	}
}