let myArray = [1, 2, 3, 4, 5, 6, 2, 3];
let num = 2;


for (i=0; i<=myArray.length; i++){
    if(myArray[i] == num){
        myArray.splice(i, 1);
    }
}

console.log(myArray);