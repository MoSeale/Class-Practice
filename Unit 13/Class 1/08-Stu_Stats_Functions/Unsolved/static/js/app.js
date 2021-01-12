var movieScore = [4.4, 3.3, 5.9, 8.8, 1.2, 5.2, 7.4, 7.5, 7.2, 9.7, 4.2, 6.9];
var monthlyAvgRainFall = [3.03, 2.48, 3.23, 3.15, 4.13, 3.23]
var mileRunTimes = [5.06, 4.54, 5.56, 4.40, 7.10]

///function for the average
function mean(arr){
    var total = 0
    for (var j = 0; j < arr.length; j++) {
        ///initialize total
       
        total+=arr[j]
        }
    meanValue = total/arr.length
    return meanValue
}

///function for the variance

function variance(arr){
    mean_arr =  mean(arr)
    var total2 = 0

    for(var i=0; i < arr.length; i++){ 
        total2 += (arr[i]-mean_arr)**2
    }
    varValue = total2/(arr.length)
    return varValue

}

///function for the standard deviation
function stdDev(arr){
    var_arr = variance(arr)
    stddevValue = Math.sqrt(var_arr)
    return stddevValue

}

///console log  information

console.log(`The Mean is: ${mean(movieScore)}`)
console.log(`The Variance is: ${variance(movieScore)}`)
console.log(`The Standard Deviation is: ${stdDev(movieScore)}`)
