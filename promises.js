function loadImage(url) {
	return new Promise((resolve, reject) => {
		let image = new Image();

		image.onload = function() {
			resolve(image);
		};

		image.onerror = function() {
			const message = `Could not load image at ${url}`;
			reject(new Error(message));
		}

		image.src = url;
	});
}

let addImg = src => {
	let imgElement = document.createElement("img");
	imgElement.src = src;
	document.body.appendChild(imgElement);
};

Promise.all([
	loadImage("images/cat_01.jpg"),
	loadImage("images/cat_02.jpg"),
	loadImage("images/cat_03.jpg"),
]).then(images => {
	images.forEach(img => addImg(img.src));
}).catch(err => {
	console.log(err);
});
