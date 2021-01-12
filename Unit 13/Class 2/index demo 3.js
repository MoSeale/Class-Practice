////arrow Function


var theStagesOfJS = ["confidence", "sadness", "confusion", "realization", "debugging", "satisfaction"];
// Challenge Activity
var princesses = [
  { name: "Rapunzel", age: 18 },
  { name: "Mulan", age: 16 },
  { name: "Anna", age: 18 },
  { name: "Moana", age: 16 }
];
var names = princesses.map( princess =>  princess.name )
//console.log("names: ", names);  
var example = theStagesOfJS.map(function(item, index) {
  return `Stage ${index} is ${item}`
})
var example = theStagesOfJS.map( (item, index) => `Stage ${index} is ${item}`)
console.log(example)