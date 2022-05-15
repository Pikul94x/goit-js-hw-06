const elementLiItems = document.querySelectorAll(".item");
console.log(`Number of categories: ${elementLiItems.length}`);

elementLiItems.forEach((item) => {
  console.log(`Category: ${item.querySelector("h2").textContent}`);
  console.log(`Elements: ${item.querySelectorAll("li").length}`);
});



// const items = document.querySelectorAll(".item");

// // console.log(items.length);

// const selectorAllLength = items.length;

// console.log(`Number of categories: ${selectorAllLength}`);

// items.forEach((item) => {
//     const itemSelector = item.querySelector("h2").textContent
//     console.log(`Category: ${itemSelector}`);
//     console.log(`Elements: ${item.querySelectorAll("li").length}`);
// })

// const numberOfCategories = document.querySelectorAll(".item");
// console.log(`Number of categories: ${numberOfCategories.length}`);
// numberOfCategories.forEach((item) => {
//   console.log(`Category: ${item.firstElementChild.textContent}`);
//   console.log(`Elements: ${item.querySelectorAll("li").length}`);
// });

// const liItems = document.querySelectorAll(".item")
// const liItemsLength = liItems.length

// console.log(`Number of categories: ${liItemsLength}`);

// liItems.forEach((item) => {
//     const heading = item.querySelector("h2").textContent;
//     console.log(`Category: ${heading}`);
//     console.log(`Elements: ${item.querySelectorAll("li").length}`);
// })
