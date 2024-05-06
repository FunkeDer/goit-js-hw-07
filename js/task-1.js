const categoriesContainerItems = document.querySelectorAll('#categories .item');
console.log(`Number of categories: ${categoriesContainerItems.length}`)

categoriesContainerItems.forEach(element => {
    const categoriesName = element.querySelector("h2");
    const countOfEachCategory = element.querySelectorAll("ul li")

    console.log(`Category: ${categoriesName.textContent}`)
    console.log(`Elements: ${countOfEachCategory.length}`)
})