const ulCategoriesEl = document.querySelector('#categories');
const ulChildArr = Array.from(ulCategoriesEl.children);

console.log(`Number of categories: ${ulChildArr.length}`);
console.log(ulChildArr);

ulChildArr.forEach(category => {
    const categoryName = category.querySelector('h2').textContent;
    const categoryItemCount = category.querySelectorAll('ul > li').length;
    
    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${categoryItemCount}`);
});
