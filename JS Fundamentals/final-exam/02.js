function solve(input){
    let string = input[0]
    let pattern = /(?:@+|#+)([a-z]{3,})(?:@+|#+)(?:[^\w]*)(?:\/)(\d+)(?:\/)/g

    let eggsLength = string.match(pattern).length;

    for (let i = 0; i < eggsLength; i++) {
        let eggs = pattern.exec(string);
        let color = eggs[1];
        let amount = eggs[2];
        console.log(`You found ${amount} ${color} eggs!`);
    }

    
}

solve(['@@@@green@*/10/@yel0w@*26*#red#####//8//@limon*@*23*@@@red#*/%^&/6/@gree_een@/notnumber/###purple@@@@@*$%^&*/5/'])