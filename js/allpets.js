//console.log("all pets")

const loadAllPets = () => {
    fetch("https://openapi.programming-hero.com/api/peddy/pets")
    .then((res) => res.json())
    .then(data =>displayAllPets(data.pets) )
    .catch(error => console.log(error))

    
}

const demo =  {
    "petId": 1,
    "breed": "Golden Retriever",
    "category": "Dog",
    "date_of_birth": "2023-01-15",
    "price": 1200,
    "image": "https://i.ibb.co.com/p0w744T/pet-1.jpg",
    "gender": "Male",
    "pet_details": "This friendly male Golden Retriever is energetic and loyal, making him a perfect companion for families. Born on January 15, 2023, he enjoys playing outdoors and is especially great with children. Fully vaccinated, he's ready to join your family and bring endless joy. Priced at $1200, he offers love, loyalty, and a lively spirit for those seeking a playful yet gentle dog.",
    "vaccinated_status": "Fully",
    "pet_name": "Sunny"
  }

const displayAllPets = (pets) => {
    //console.log(pets)
   const PetsContainer =document.getElementById("all-pets");

   PetsContainer.innerHTML = "";
   //console.log(PetsContainer);
//    create card for all pets
    pets.forEach(pet => {

        const divPet = document.createElement("div");
        divPet.classList ="card  border rounded-xl border-gray-200 h-[500px]"
        divPet.innerHTML =`<figure class="">
    <img
      src=${pet.image}
      alt="pets"
      class="h-full w-full p-2  object-cover rounded-xl " />
  </figure>
  <div class=" items-start text-start px-3 py-5">
    <h2 class="card-title">${pet.pet_name}</h2>
    <h5 class= "text-gray-700 text-sm"><i class="fa-regular fa-grid-2"></i> Breed : ${pet.breed ===undefined ? `` : `${pet.breed}` } </h5>
    <h5 class= "text-gray-700 text-sm"><i class="fa-solid fa-cake-candles"></i> Birth : ${pet.date_of_birth} </h5>
    <h5 class= "text-gray-700 text-sm"><i class="fa-solid fa-mercury"></i> Gender : ${pet.gender} </h5>
    <h5 class= "text-gray-700 text-sm"><i class="fa-solid fa-dollar-sign"></i> Price : ${pet.price == null ? `` :`${pet.price}` }$ </h5>
    

    <div class="flex  justify-around border-t-2 pt-2 ">
      <button class="btn btn-xs"><i class="fa-solid fa-thumbs-up"></i></button>
      <button class="btn btn-xs">Adopt</button>
      <button class="btn btn-xs">Details</button>

    </div>
  </div>`;

        PetsContainer.appendChild(divPet);
        
    });
}

loadAllPets();