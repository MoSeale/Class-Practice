//var sentence = "I yam what I yam and always will be what I yam"
function wordCounter(sentence) {
    // split the sentence 
        var sentenceArray = sentence.split(" ");
    // an array
        var wordFrequency = {}
    //foreach the array to get each item 
    // for (var i = 0; i< sentenceArray.length; i++) {
    // var word = sentenceArray[i]
        sentenceArray.forEach(function(word) {
            if (word in wordFrequency) {
                wordFrequency[word] += 1
            }
            else {
                wordFrequency[word] = 1
            }
        });
        console.log(wordFrequency);
    };
    wordCounter("I yam what I yam and always will be what I yam");