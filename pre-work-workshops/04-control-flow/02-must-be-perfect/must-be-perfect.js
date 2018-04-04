let word = 'carrots';
// let word = 'pacific';
// let word = 'perfecto';
// let word = 'perfect';


let lastWord;

// YOUR CODE BELOW

function perfect (word){
  if (word.length > 7 && word.charAt(0) === 'p') {
    return word.toUppercase();
  } else {
    return word;
  }
}

