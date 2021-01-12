////object iteration



var userInfo = {
  name: "Eric",
  age: 32,
  location: "North America"
};
//console.log(Object.keys(userInfo));
Object.keys(userInfo).forEach(item => console.log(item))
Object.values(userInfo).forEach(item => console.log(item))
Object.entries(userInfo).forEach( ([key, value]) => console.log(`The item with key ${key} is ${value}`))

