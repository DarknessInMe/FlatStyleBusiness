window.addEventListener("resize", changeIcon);
window.addEventListener("load", startup);

const banner = document.querySelector(".banner");
const confirmBtn = document.querySelector("[data-find=confirm]");

function changeIcon() {
	let windowWidth = window.innerWidth;
	if (windowWidth <= 768) {
		if (!confirmBtn.classList.contains("confirm-text-style")) {
			confirmBtn.textContent = "Confirm";
			confirmBtn.classList.remove("confirm");
			confirmBtn.classList.add("confirm-text-style");
		}
	} else {
		if (confirmBtn.classList.contains("confirm-text-style")) {
			confirmBtn.textContent = "";
			confirmBtn.classList.remove("confirm-text-style");
			confirmBtn.classList.add("confirm");
		}
	}
}

function startup() {
	if (window.matchMedia("(max-width: 768px)").matches) {
		confirmBtn.textContent = "Confirm";
		confirmBtn.classList.remove("confirm");
		confirmBtn.classList.add("confirm-text-style");
	}
	let index = 1;
	let arrayOfPhotos = [
		"../Sea.jpg",
		"../Sea1.jpg",
		"../Sea2.jpg",
		"../Sea3.jpg",
		"../Sea4.jpg",
	];

	// let title = document.querySelector(".title");
	// let sliderStatus = document.querySelectorAll(".slider-move");
	setInterval(function () {
		if (index == arrayOfPhotos.length) {
			index = 0;
		}
		banner.style.backgroundImage = `url(${arrayOfPhotos[index]})`;
		index += 1;
	}, 2500);
}
