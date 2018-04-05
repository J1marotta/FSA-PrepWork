// YOUR CODE BELOW
const mostVowels = (words) => {
  // fail early if words is not a string
  if ((typeof(words) !== "string") || (words === undefined)) {
    return ''
  } else {
    // convert to an array and count the vowels.
    const newWords = words.split(" ")
    //remove punctuation 
    .map(el => el.replace(/[.?!]/g,""))
    // turn each word into an object with a length property
    .map((el) => { 
      return {
        vowels: el.length - el.match(/[^aeiou]/gi).length || 0,
          word: el
      }
    })
    // compare the words lengths
    .reduce((firstWord, nextWord) => (
      firstWord.vowels >= nextWord.vowels ? 
      firstWord : nextWord ))
    // if there are no vowels then just return an empty
    if (newWords.vowels < 1) {
      return ''
    } 
    return newWords.word
  }
}

mostVowels("why dry my sly lynx?")