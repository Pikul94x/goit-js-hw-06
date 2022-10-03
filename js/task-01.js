const numberOfCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${numberOfCategories.length}`);

numberOfCategories.forEach(item => {
	console.log(`Category: ${item.querySelector("h2").textContent}`);
	console.log(`Elements: ${item.querySelectorAll("li").length}`);
});
