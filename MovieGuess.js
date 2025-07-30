/** let favMovie = "3idiots";

let guess = prompt(" Enter the movie u guessed:- ");

while ( (guess != favMovie) && ( guess != "quit")){
    guess = prompt("Enter again u guessed wrong:- ");

}

if ( guess == favMovie){
    console.log( " You guessed it right i was 3idiots ");
} **/

// Create a game where the favorite movie is stored  by user1 and that movie is predicted by the user 2:- 

let favMovie = prompt("Enter the Movie which you want to store:- ");

let guess = prompt("USER 2 Predict the movie:- ");

while ( (guess != favMovie) && (guess != "quit")){
    alert(" Guess again");
    guess = prompt("enter again:- ");
}

if ( guess == favMovie){
    console.log(`Congratulation you the the movie right ${guess}`);
}

