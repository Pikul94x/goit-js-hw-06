const range = document.querySelector("#font-size-control");
const content = document.querySelector("#text");

range.addEventListener("input", () => {
	content.style.fontSize = `${input.value}px`;
});
