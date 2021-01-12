

// Randomly select an episode number for Star Wars
var text = d3.select(".star-wars")
  .text(Math.floor(Math.random() * 9) + 1);
// Select the upvote and downvote buttons
var upvote = d3.select(".upvote")
var downvote = d3.select(".downvote")
var counter = d3.select(".counter")
// Select the counter h3 element
// Use D3 `.on` to attach a click handler for the upvote
upvote.on("click", function () {
    var current = parseInt(counter.text())
    current = current + 1
    counter.text(current)
})
// Use d3 `.on` to attach a click handler for the downvote
downvote.on("click", function () {
    var current = parseInt(counter.text())
    current = current - 1
    counter.text(current)
})