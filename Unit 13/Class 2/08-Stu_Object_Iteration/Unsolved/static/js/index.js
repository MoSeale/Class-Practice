// Array of recipe objects
var recipes = [
  { dish: "Fried fish", spice: "Dorrigo" },
  { dish: "Crab Rangoon", spice: "Akudjura" },
  { dish: "Pickled Okra", spice: "Chili pepper" },
  { dish: "Macaroni salad", spice: "Pepper" },
  { dish: "Apple butter", spice: "Avens" },
  { dish: "Pepperoni Pizza", spice: "Asafoetida" },
  { dish: "Hog fry", spice: "Peppermint" },
  { dish: "Corn chowder", spice: "Akudjura" },
  { dish: "Home fries", spice: "Celery leaf" },
  { dish: "Hot chicken", spice: "Boldo" }];

console.log(recipes);

// @TODO: YOUR CODE HERE

///initialize dishes array
dishes = []
/// initialize spices array
spices = []



recipes.forEach((recipe){
  //console.log(recipe)


////iterate over dishes using Object.entries

  Object.entries(recipe).forEach(([key, value]){
    //push dishes to the dishes array
    if(key == 'dish'){
    dishes.push(value)
    }

    //push spices to the dishes array
    else(key == 'spice'){
      spices.push(value)
    }
  })

})


///log dishes array to console
console.log(dishes)

///log spices array to console

console.log(spices)


////iterate over dishes using forEach()




////iterate over spices using Object.entries


////iterate over spices using forEach()


///log dishes array to console




///log spices array to console