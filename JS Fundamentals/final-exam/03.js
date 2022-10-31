function solve(input){

    let followers = {};
    
    while(input[0] !== "Log out"){
        let line = input.shift().split(": ");
        let command = line[0];

        if(command === "New follower"){
            let username = line[1];
            if(!followers.hasOwnProperty(username)){
                followers[username] = [0, 0]
            }
        }else if(command === "Like"){
            let username = line[1];
            let count = Number(line[2]);
            if(!followers.hasOwnProperty(username)){
                followers[username] = [count, 0]
            }else{
                followers[username][0] += count;
            }
        }else if(command === "Comment"){
            let username = line[1];

            if(!followers.hasOwnProperty(username)){
                followers[username] = [0, 1]
            }else{
                followers[username][1]++
            }
        }else if(command === "Blocked"){
            let username = line[1];
            if(followers.hasOwnProperty(username)){
                delete followers[username];
            }else{
                console.log(username + " doesn't exist.");
            }
        }
    }

    let entries = Object.entries(followers);
    
    for (let entrie of entries) {
        let sum = entrie[1][0] + entrie[1][1];
        followers[entrie[0]].push(sum);
    }
    
    entries.sort((userA, userB)=>{
        let userNameA = userA[0]
        let userNameB = userB[0]
        let interactionsA = userA[1][2]
        let interactionsB = userB[1][2]

        if(interactionsA !== interactionsB){
            return interactionsB - interactionsA;
        }else{
            return userNameA.localeCompare(userNameB)
        }
    })

    console.log(entries.length + " followers")
    for (let currentUser of entries) {
        console.log(currentUser[0] + ": " + currentUser[1][2])
    }  

}

solve(["New follower: George",
"Like: George: 5",
"New follower: George",
"Log out"])