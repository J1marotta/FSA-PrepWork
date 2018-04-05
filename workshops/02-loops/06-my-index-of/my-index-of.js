// YOUR CODE BELOW
const myIndexOf = (string, target, targetStartAt=0) => {
  debugger
  for (let x = targetStartAt; x <= string.length - target.length; x++){
    let substring = string.slice(x, x + target.length)
    
    if (substring === target){
      return x
    }
  }
  return -1;
}


myIndexOf('here and there', 'here', 4) 
