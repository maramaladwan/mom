function countCharactersSentencesWords(text) {

    var characterCount = text.length;
  

    var sentenceCount = text.split(/[.!?]/).length - 1;
  

    var wordCount = text.split(/\s+/).filter(Boolean).length;
  
    return {
      characters: characterCount,
      sentences: sentenceCount,
      words: wordCount,
    };
  }
  
  var text = "whats your name?,my name maram";
  var result = countCharactersSentencesWords(text);
  
  console.log("Number of characters:" + result.characters);
  console.log("Number of sentences: " + result.sentences);
  console.log(" Number of words:" + result.words);
 

