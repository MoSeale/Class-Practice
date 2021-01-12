var movie = {
    name: 'Star Wars', 
    year: 1977, 
    profitable: true, 
    sequels: [15,6,1,2]
};
console.log(movie.name); 
console.log(movie.year); 
console.log(movie.sequels[0]);

movie.rating = 8.5; 
console.log(movie.rating);

delete movie.year; 



console.log(movie)

if ("rating" in movie) {
    console.log("yay!")
}
console.log(Object.keys(movie));
console.log(Object.values(movie));
console.log(Object.entries(movie));