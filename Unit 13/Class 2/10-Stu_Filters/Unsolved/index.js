// @TODO: Uncomment the following file and complete the code
//        according to the instructions in README.md.

// Roster of player
var roster = [{
   name: "Doug",
   position: "Quarterback",
   madeTeam: true
 },
 {
   name: "Antonio",
   position: "Tight End",
   madeTeam: true
 },
 {
   name: "Nick",
   position: "Kicker",
   madeTeam: false
 },
 {
   name: "Ereck",
   position: "Offensive Live",
   madeTeam: false
 },
 {
   name: "AJ",
   position: "Line Backer",
   madeTeam: true
 }];

// YOUR CODE HERE

function teamPass(team){
    return team.madeTeam == true
}

//console.log(teamPass(roster[0]))
 //var teamMade= roster.filter(teamPass)

var teamMade = roster.filter(function(team){

    return team.madeTeam == true
})

console.log(teamMade)


var teamMade = roster.filter(team => team.madeTeam == true)

console.log(teamMade)



console.log(`${teamMade.length} made the team` )

console.log(`${roster.length- teamMade.length} were cut`)
