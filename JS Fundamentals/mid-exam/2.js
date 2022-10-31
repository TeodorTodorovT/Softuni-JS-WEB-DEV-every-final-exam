function solve(input){
    let listOfPhoneArr = input[0].split(", ")
    let commandsArr = input.slice(1)

    for (let i = 0; i < commandsArr.length; i++) {
        let currentCommand = commandsArr[i].split(" - ");
        let currentCommandAction = currentCommand[0];
        let currnetPhone = currentCommand[1];
        let indexOfcurrnetPhone = listOfPhoneArr.indexOf(currnetPhone);

        switch(currentCommandAction){
            case "Add":
                if(indexOfcurrnetPhone === -1){
                    listOfPhoneArr.push(currnetPhone);
                }
                break;
            case "Remove":
                if(indexOfcurrnetPhone > -1){
                    listOfPhoneArr.splice(indexOfcurrnetPhone,1)
                }
                break;
            case "Bonus phone":
                let currnetPhoneBonus = currnetPhone.split(":")
                let oldPhone = currnetPhoneBonus[0];
                let NewPhone = currnetPhoneBonus[1];
                let IndexOfOldPhone = listOfPhoneArr.indexOf(oldPhone);

                if(IndexOfOldPhone > -1){
                    listOfPhoneArr.splice(IndexOfOldPhone + 1,0,NewPhone)
                }

                break;
            case "Last":
                if(indexOfcurrnetPhone > -1){
                    let holdPhone = listOfPhoneArr.splice(indexOfcurrnetPhone,1).join()
                    listOfPhoneArr.push(holdPhone)
                }
                break;
            case "End":
                break;
        }
    }

    console.log(listOfPhoneArr.join(", "));

}

solve(["SamsungA50, MotorolaG5, IphoneSE",
"Add - Iphone10",
"Remove - IphoneSE",
"End"])