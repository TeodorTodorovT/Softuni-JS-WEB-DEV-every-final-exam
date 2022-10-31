function solve(input){
    let numbersArr = input[0].split(" ");
    let commandsArr = input.slice(1);
    let numbersToRemove = [];

    for (let i = 0; i < commandsArr.length; i++) {
        let currentCommand = commandsArr[i].split(" ");
        let currentCommandAction = currentCommand[0];
        let currentCommandIndex = 0;
        let currentCommandIndexSecond = 0;
        switch(currentCommandAction){
            case "Add":
                    currentCommandIndex = Number(currentCommand[1]);

                    numbersArr.push(currentCommandIndex.toString())
                break;
            case "Remove":
                    currentCommandIndex = currentCommand[1];
                    let indexOfRemove = numbersArr.indexOf(currentCommandIndex);

                    if(indexOfRemove > -1){
                        numbersArr.splice(indexOfRemove, 1)
                    }
                break;
            case "Replace":
                currentCommandIndex = currentCommand[1];
                currentCommandIndexSecond = Number(currentCommand[2]);

                let indexOfValue = numbersArr.indexOf(currentCommandIndex);

                if(indexOfValue > -1){
                    numbersArr.splice(indexOfValue,1,currentCommandIndexSecond.toString())
                }
                break;
            case "Collapse":
                currentCommandIndex = Number(currentCommand[1]);
                let numbersArrLength = numbersArr.length
                
                for (let j = 0; j < numbersArrLength; j++) {
                    let currentNum = Number(numbersArr[j]);
                    let IndexOfCurrentNum = numbersArr.indexOf(currentNum.toString())

                    if(currentNum < currentCommandIndex){
                        numbersToRemove.push(currentNum.toString())
                    }
                    
                }
                
                numbersArr = numbersArr.filter( function( el ) {
                    return !numbersToRemove.includes( el );
                  } );
                break;
            case "Finish":
                break;
        }
    }

    console.log(numbersArr.join(" "));

}

solve(["5 9 70 -56 9 9",

"Collapse 60",
"Finish"])