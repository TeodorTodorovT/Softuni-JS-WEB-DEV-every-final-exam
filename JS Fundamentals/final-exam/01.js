

function solve(input){
    let string = input.shift();

    while(input[0] !== "Done"){
        let line = input.shift().split(" ")
        let command = line[0]

        if(command === "Change"){
            let char = line[1]
            let replacement = line[2]

            while(string.includes(char)){
                string = string.replace(char, replacement)
            }
            console.log(string);

        }else if(command === "Includes"){
            let stringToCheck = line[1]

            if(string.includes(stringToCheck)){
                console.log("True");
            }else if(!string.includes(stringToCheck)){
                console.log("False");
            }
        }else if(command === "End"){
            let substring = line[1];
            if(string.endsWith(substring)){
                console.log("True");
            }else if(!string.endsWith(substring)){
                console.log("False");
            }
        }else if(command === "Uppercase"){
            string = string.toUpperCase()
            console.log(string);
        }else if(command === "FindIndex"){
            let char = line[1];
            console.log(string.indexOf(char));
        }else if(command === "Cut"){
            let starIndex = Number(line[1]);
            let count = Number(line[2]);
            let endIndex = starIndex + count;
            console.log(string.slice(starIndex, endIndex));
        }
    }
}

solve(["//Th1s 1s my str1ng!//",
"Change 1 i",
"Includes string",
"End my",
"Uppercase",
"FindIndex I",
"Cut 5 5",
"Done"])