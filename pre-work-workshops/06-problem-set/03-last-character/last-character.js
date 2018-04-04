// YOUR CODE BELOW
const lastCharacter = (one, two) => {
  let lastOne = one.slice(-1)
  let lastTwo = two.slice(-1)

  if(lastOne === lastTwo){
    return true;
  }

  return false;
}