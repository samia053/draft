//console.log("hello")
//load data 
// fetch data 
// display data
const loadCategory = () => {
    fetch("https://openapi.programming-hero.com/api/peddy/categories")
    .then((res) => res.json())
    .then(data =>displayCategory(data.categories) )
    .catch(error => console.log(error))

    
}




const displayCategory = (categories)=> {
    //console.log(data)

    const CategoryContainer =document.getElementById("categoryDiv")
    //console.log(buttonContainer)

    categories.forEach(item => {
       //console.log(item)

    //    create button and add data to html
        const buttonContainer = document.createElement("div");
        buttonContainer.innerHTML =`
            <button class ="btn" onclick ="loadCategoryPets(${item.category})" > ${item.category}</button>
        `
        

       // console.log(item.id)
        //console.log(item.category)
        
        CategoryContainer.appendChild(buttonContainer);

    });


}

loadCategory();