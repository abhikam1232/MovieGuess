// Write a JS program to find the sum of digits in a number
// 287152 so the sum is :- 25 

let num = prompt(" enter the number to sum:- ");
num = parseInt(num);
let sum = 0;

if (num <0){
    num = -num;
}

while ( num > 0){
    let lastdigit = num % 10;
    sum = sum + lastdigit;
    num = Math.floor(num/10);
}
console.log(sum);