// YOUR CODE BELOW
const everyWhichWay = (num1, num2, target) => {
  result = null

  if (num1 + num2 === target ) {
    return 'sum'
  } else if (num1 - num2 === target) {
    return 'difference'
  } else if (num1 * num2 === target) {
    return 'product'
  } else if (num1 / num2 === target) {
    return 'fraction'
  }

  return result;
}