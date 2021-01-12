////FILTERs
var simpsons = [{
  name: "Homer",
  age: 45
}, {
  name: "Lisa",
  age: 8
}, {
  name: "Marge",
  age: 43
}, {
  name: "Bart",
  age: 10
}, {
  name: "Maggie",
  age: 1
}];
function younger(person) {
    return person.age < 30
}
//console.log(younger(simpsons[0]))
// var youngSimpsons = simpsons.filter(younger)
var youngSimpsons = simpsons.filter(function(person) {
  return person.age < 30 
})
var youngSimpsons = simpsons.filter( person => person.age < 30)
console.log(youngSimpsons)