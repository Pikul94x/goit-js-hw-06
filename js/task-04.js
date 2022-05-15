let counterValue = 0;

const incrementCounter = document.querySelector("[data-action='increment']");
const decrementCounter = document.querySelector('[data-action="decrement"]');
const value = document.querySelector("#value");

incrementCounter.addEventListener("click", () => {
  counterValue++;
  value.innerHTML = counterValue;
});

decrementCounter.addEventListener("click", () => {
  counterValue--;
  value.innerHTML = counterValue;
});


// let counterValue = 0;

// const btnAdd = document.querySelector('[data-action="increment"]');
// const btnSubstract = document.querySelector('[data-action="decrement"]');
// const input = document.querySelector("#value");

// const increment = () => {
//   counterValue++;
//   input.innerHTML = counterValue;
// };

// const decrement = () => {
//   counterValue--;
//   input.innerHTML = counterValue;
// };

// btnAdd.addEventListener("click", increment);
// btnSubstract.addEventListener("click", decrement);
