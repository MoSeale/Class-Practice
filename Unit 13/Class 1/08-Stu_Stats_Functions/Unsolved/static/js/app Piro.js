function mean(myArr) {
    var sum = 0
    for (var i = 0; i < myArr.length; i++) {
        sum += myArr[i]
    }
    var meanValue = sum / myArr.length
    return meanValue
}
function variance(myArr) {
    var meanValue = mean(myArr)
    var total = 0
    for (var i = 0; i < myArr.length; i++) {
        total += (myArr[i] - meanValue) ** 2
    }
    var varianceValue = total / myArr.length
    return varianceValue
}
function stdev (myArr) {
    var varianceValue = variance(myArr)
    var stdevValue = Math.sqrt(varianceValue)
    return stdevValue
}
var movieScore = [4.4, 3.3, 5.9, 8.8, 1.2, 5.2, 7.4, 7.5, 7.2, 9.7, 4.2, 6.9];
var monthlyAvgRainFall = [3.03, 2.48, 3.23, 3.15, 4.13, 3.23];
var mileRuns = [5.06, 4.54, 5.56, 4.40, 7.10];
console.log(`Movie Score: mean: ${mean(movieScore)}  variance: ${variance(movieScore)} stdev: ${stdev(movieScore)}`)
console.log(`Monthly Rainfall: mean:${mean(monthlyAvgRainFall)} variance: ${variance(monthlyAvgRainFall)} stdev: ${stdev(monthlyAvgRainFall)}`)
console.log(`Mile Runs: mean: ${mean(mileRuns)} variance: ${variance(mileRuns)} stdev: ${stdev(mileRuns)}`)