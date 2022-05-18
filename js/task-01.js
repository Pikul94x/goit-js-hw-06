const numberOfCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${numberOfCategories.length}`);

numberOfCategories.forEach((item) => {
  console.log(`Category: ${item.querySelector("h2").textContent}`);
  console.log(`Elements: ${item.querySelectorAll("li").length}`);
});

// const items = document.querySelectorAll(".item");
// const selectorAllLength = items.length;

// console.log(`Number of categories: ${selectorAllLength}`);

// items.forEach((item) => {
//   const itemSelector = item.querySelector("h2").textContent
//   const liLength = item.querySelectorAll("li").length
//     console.log(`Category: ${itemSelector}`);
//     console.log(`Elements: ${liLength}`);
// })

// const numberOfCategories = document.querySelectorAll(".item");
// console.log(`Number of categories: ${numberOfCategories.length}`);
// numberOfCategories.forEach((item) => {
//   console.log(`Category: ${item.firstElementChild.textContent}`);
//   console.log(`Elements: ${item.querySelectorAll("li").length}`);
// });
