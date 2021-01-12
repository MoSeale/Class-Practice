///to select a class
d3.select(".text1").text()

///to select a id
d3.select("#text2").text("hey I hacked this html")


///to select the a tag
d3.select(".my-link").html()
d3.select(".my-link>a").html()
d3.select(".my-link>a").text()


///update link


var link = d3.select(".my-link>a")
link.attr("href","https://www.google.ca/")

////alternate
d3.select(".my-link>a").attr("href", "https://cbc.ca").text("I changed this to point to CBC.ca")


///select all li (in the list)
///make a style change
d3.selectAll("li").style("color","red")

////add on more data to the list
///select ul and append new item
///FYI doesnt have style change made above; goes bk to original css since js is sequential

d3.select("ul").append("li")
d3.select("ul").append("li").text("this is a new item")

///alternative long way

// Create a new element
var li1 = d3.select("ul").append("li");
li1.text("A new item has been added!");
// Use chaining to create a new element and set its text
var li2 = d3.select("ul").append("li").text("Another new item!");