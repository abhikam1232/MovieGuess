
let fruits = ["mango", "apple", "banana", "pineapple", "custardApple", "Lemonade"];

for ( i=0; i<=fruits.length; i++){
    console.log(i, fruits[i]);
}


// it prints the odd value 
let cars = [ "volvo", "Mercedes", "jaguar", "bmw-gt", "Auddi", "lamborgini"];
console.log(`cars:- odd listing `);

for (i=1; i < cars.length; i=i+2){
    console.log(i, cars[i]);
}

// It prints the even value:- 
let car = [ "volvo", "Mercedes", "jaguar", "bmw-gt", "Auddi", "lamborgini"];
console.log(`cars:- even listing `);

for (i=2; i < car.length; i=i+2){
    console.log(i, car[i]);
}

