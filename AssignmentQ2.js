// Write a JS program to find the number of digits in a number:- 
// if number is 287152 count is i6 

function countDigits(num) {
    return Math.abs(num).toString().length;
}

// Example usage:
let number = 123456;
console.log(countDigits(number)); // Output: 6
