let arry = [ 4445, 554, 500, 535584, 45555, 78455, 1000000];
console.log(arry);
let large = 0;

for ( let i=0; i<=arry.length; i++){
    if (large <= arry[i]){
        large = arry[i];
    }
}
console.log(large);