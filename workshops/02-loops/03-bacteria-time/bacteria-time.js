// YOUR CODE BELOW
const bacteriaTime = (currentNum, targetNum) => {
  debugger
  if (targetNum < currentNum) {
    return 'targetNum must be larger than currentNum'
  }
  let time = 0;
  while (currentNum < targetNum) {
    currentNum *= 2
    time += 20
  }

    return time;
}

bacteriaTime(20,87)