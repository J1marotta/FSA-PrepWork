// YOUR CODE BELOW
const onlyOdds = (num) => {
  debugger
  if (num <1) {
    return 0
  }
  let sum = 0
  while (num >= 1){
    if (num % 2 === 1){
      sum += num;
    }
    num--;
  }
  return sum;
}


onlyOdds(7);