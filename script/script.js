window.addEventListener("load", checkMedia);

const banner = document.querySelector(".banner");
const confirmBtn = document.querySelector("[data-find=confirm]");
const screen = window.matchMedia("(max-width: 768px)");

let toggle = true;

function checkMedia() {
	screen.addListener(buttonTransform);
	buttonTransform(screen);
}

function buttonTransform(screen) {
	if (screen.matches) {
		confirmBtn.textContent = "Confirm";
		confirmBtn.classList.remove("confirm");
		confirmBtn.classList.add("confirm-text-style");

		toggle = false;
		banner.style.backgroundImage = "url(images/banner/sea_mobile.jpg)";
	} else {
		confirmBtn.textContent = "";
		confirmBtn.classList.remove("confirm-text-style");
		confirmBtn.classList.add("confirm");

		toggle = true;
		startup();
	}
}

function startup() {
	let index = 1;
	let arrayOfPhotos = [
		"images/banner/Sea1.jpg",
		"images/banner/Sea2.jpg",
		"images/banner/Sea3.jpg",
		"images/banner/Sea4.jpg",
		"images/banner/Sea5.jpg",
	];

	let title = document.querySelector(".title");
	let sliderStatus = document.querySelectorAll(".slider-move");

	const changes = setInterval(function () {
		if (!toggle) {
			clearTimeout(changes);
		} else {
			if (index == arrayOfPhotos.length) {
				index = 0;
			}
			banner.style.backgroundImage = `url(${arrayOfPhotos[index]})`;
			index += 1;
		}
	}, 2500);
}
