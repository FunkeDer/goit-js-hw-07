const ulCategoriesEl = document.querySelector('#categories');

const numberOfCategories = ulCategoriesEl.children.length;
const ulItemEl = document.querySelectorAll('.item ul');
const categories = document.querySelectorAll("h2");

console.log(`Number of categories: ${numberOfCategories}`);
console.log(`Category: ${categories[0].textContent}`);
console.log(`Elements: ${ulItemEl[0].children.length}`);
console.log(`Category: ${categories[1].textContent}`);
console.log(`Elements: ${ulItemEl[1].children.length}`);
console.log(`Category: ${categories[2].textContent}`);
console.log(`Elements: ${ulItemEl[2].children.length}`);