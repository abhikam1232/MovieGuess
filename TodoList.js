/** let todo = [];

let request = prompt(" Enter your request :- ");

while (true){
    if ( request == "quit"){
        console.log(" quiting app");
        break;
    }

    if ( request == "list"){
        console.log("-----------------");
        for (let i=0; i<todo.length; i++){
            console.log(i, todo[i]);
        }
        console.log("----------------");

    } else if ( request  == "add"){
        let task =  prompt(" Enter the task you want to add:- ");
        todo.push(task);
        console.log(" Task added ");

    } else if ( request == "delete"){
        let idx = prompt(" Please enter the task index:- ");
        todo.splice(idx, 1);
        console.log("Tak deleted");
    } else {
        console.log(" Wrong request ");
    }


     request = prompt(" Enter your request :- ");

} **/

     let things = [];

     let work = prompt(" Enter the request :- ");

     while (true){
        if ( work == "quit"){
            break;
        }

        if ( work == "list"){
            console.log("--------------------");
            for ( i=0; i<things.length; i++){
                console.log(i, things[i]);
            }
            console.log("-------------------");
        } else if ( work == "add"){
            let task = prompt("Now enter the task which you want to add:- ");
            things.push(task);
            console.log(" Tasks adeed!! ");
        } else if ( work == "delete"){
            let idx = prompt(" Enter the index:- ");
            things.splice(idx, 1);
            console.log("tasks deleted");
        } else {
            console.log("wrong");
        }

         work = prompt(" Enter the request :- ");

        
     }