/* Given a string, return true or false depending on whether that string has balanced parentheses.
For the purposes of this problem, you only need to worry about parentheses ( and ), not other opening-and-closing marks,
like curly brackets, square brackets, or angle brackets.
*/

// Sample Strings
let sample1 = "This ( is unbalanced."
let sample2 = "(This (is (a) balanced) string.)"
let sample3 = "This is () also ) unbalanced."
let sample4 = "Balanced."

// Write your solution below:

function has_balanced_parens(str) {
    let leftCount = 0;
    let rightCount = 0;
    for(let i = 0; i < str.length; i++) {
        if (str[i] === "(") {
            leftCount++;
        }
        if (str[i] === ")") {
            rightCount++;
        }
    }
    if (leftCount === rightCount) {
        return true;
    } else {
        return false;
    }
}

console.log(has_balanced_parens('()')); // true
console.log(has_balanced_parens("(Oh Noes!)(")); // false
console.log(has_balanced_parens("((There's a bonus open paren here.)")); // false
console.log(has_balanced_parens(')')); // false
console.log(has_balanced_parens('(')); // false
console.log(has_balanced_parens("(This has (too many closes.)))")); // false
console.log(has_balanced_parens("Hey... ther are no parens here!")); // true