const categories = document.querySelector('#categories')
const items = document.querySelectorAll('.item')
console.log(`Кількість категорій: ${items.length}`);

items.forEach((category)=>{
    let categoryName = category.querySelector('h2').textContent
    let numberOfElements = category.querySelectorAll(`li`)

})