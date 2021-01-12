// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the weather data from data.js
console.log(data);

// Step 1: Loop Through `data` and console.log each weather report object
data.forEach( function(weatherReport){
    console.log(weatherReport);
    
// Step 2:  Use d3 to append one table row `tr` for each weather report object
// Don't worry about adding cells or text yet, just try appending the `tr` elements.
    var row = tbody.append("tr")


// Step 3:  Use `Object.entries` to console.log each weather report value
    Object.entries(weatherReport).forEach(function ([key, value]){
        
        console.log(weatherReport)
    
        
// Step 4: Use d3 to append 1 cell per weather report value (weekday, date, high, low)
    var cell = row.append('td')
// Step 5: Use d3 to update each cell's text with
// weather report values (weekday, date, high, low)


    cell.text(value)

    })
})
// BONUS: Refactor to use Arrow Functions!
