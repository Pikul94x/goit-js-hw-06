const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", () => {
	if (nameOutput.textContent === "") {
		nameOutput.textContent = "Anonymous";
	}
	nameOutput.textContent = nameInput.value;
});
