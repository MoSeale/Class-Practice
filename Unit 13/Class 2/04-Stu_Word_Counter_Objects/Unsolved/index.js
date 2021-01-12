//var sentence = "I yam what I yam and always will be what I yam"

function   wordCounter(sentence){
// split the sentence 
var SentenceArray= sentence.split(" ");


//TEST console.log(sentence)
//TEST console.log(SentenceArray)


// an array
var wordFrequency={}

//foreach the array to get each item 
SentenceArray.forEach(function(word){

    currentWord = word

    if(currentWord in wordFrequency){
        wordFrequency[currentWord]+=1
    }

    else{
       wordFrequency[currentWord]=1
    }
})
console.log(wordFrequency);
};



wordCounter("I yam what I yam and always will be what I yam")

//with each item if statemnt 

    // if item in obejct.keys()
    
        // add one to the value
    
    // else 
    
    
        // add the key value pair 
  //  });