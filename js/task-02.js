const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];




const ulList = document.querySelector("#ingredients");

ingredients.forEach((ingredient) => {
  const list = document.createElement("li");
  list.textContent = `${ ingredient }`;
  ulList.append(list);
  list.classList.toggle("item")
});










