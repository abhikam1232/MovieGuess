
/*let n = prompt(" Enter the number to print the table:- ");
n = parseInt(n);

for ( let i=n; i<=n*10; i=i+n){
    console.log(i);
}*/


// print a table from input and than select the range using prompt:- 

let x = prompt(" Enter the number to print the table:- ");
x = parseInt(x);
let r = prompt(" Enter the range:- ");
r = parseInt(r);

for ( i=1; i<=r; i++){
    console.log(` ${x}*${i}=  ${x*i} `)
}