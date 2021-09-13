function isValid(bracketString) {
  let stack = []
  const matchingBrackets = {'}': '{', ')': '(', ']': '['}
  for (bracket of bracketString) {
    if (bracket === '{' || bracket === '(' || bracket === '[') {
      stack.push(bracket)
    } else {
      if (stack.length === 0) return false
      else {
        if (matchingBrackets[bracket] === stack[stack.length-1]) stack.pop()
        else return false
      }
    }
  }
  return stack.length === 0
}

const bs1 = "()"
const bs2 = "()[]{}"
const bs3 = "(]"
const bs4 = "([)]"
const bs5 = "{[]}"
const bs6 = ")(){}"
const bs7 = "{{[][]}}("

console.log(isValid(bs1))
console.log(isValid(bs2))
console.log(isValid(bs3))
console.log(isValid(bs4))
console.log(isValid(bs5))
console.log(isValid(bs6))
console.log(isValid(bs7))