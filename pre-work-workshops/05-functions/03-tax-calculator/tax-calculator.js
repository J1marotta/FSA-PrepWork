// YOUR CODE BELOW
function taxCalculator(price, state) {
  let tax = 0;
  if(state === 'NJ') {
   tax = 6.625
  } else if(state === 'NY'){
    tax = 4
  }

  const newPrice = price + (price * tax/100)
  return newPrice
}