const loadCategoryPets = (categoryName) => {
    console.log(categoryName)

    fetch(`https://openapi.programming-hero.com/api/peddy/category/${categoryName}`)
    .then((res) => res.json())
    .then(res =>console.log(res.data) )
    .catch(error => console.log(error))

}