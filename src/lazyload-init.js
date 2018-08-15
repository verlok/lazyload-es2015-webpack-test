const LazyLoad = require("vanilla-lazyload");

const logEvent = (eventName, element) => {
	console.log(
		Date.now(),
		eventName,
		element.getAttribute("data-src"),
		element.getAttribute("src")
	);
};

const lazyLoadOptions = {
	elements_selector: ".lazy",
	to_webp: true,

	callback_enter: element => {
		logEvent("ENTERED", element);
	},
	callback_load: element => {
		logEvent("LOADED", element);
	},
	callback_set: element => {
		logEvent("SET", element);
	},
	callback_error: element => {
		logEvent("ERROR", element);
		element.src = "https://placehold.it/220x280?text=Placeholder";
	}
};

const createLazyLoadInstance = () => {
	return new LazyLoad(lazyLoadOptions);
};

const lazyLoadInit = () => {
	document.addEventListener("DOMContentLoaded", createLazyLoadInstance);
};

module.exports = lazyLoadInit;
