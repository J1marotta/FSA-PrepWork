// YOUR CODE BELOW
const crazyCaps = (string) => {
  let newString = ''
  for (let i= 0; i < string.length; i++ ){
      char = string[i];
    if (i % 2 === 0 ) {
      // string[i].toLowerCase() doesn't work because js strings are immutable
      char = char.toLowerCase();
    } else {
      char = char.toUpperCase()
    }
      newString += char;
  }
  return newString; 
}


crazyCaps('fullstack is amazing');