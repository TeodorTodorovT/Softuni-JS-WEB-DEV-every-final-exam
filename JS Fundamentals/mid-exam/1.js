function solve(input){
    let days = Number(input[0]);
    let playersCount = Number(input[1]);
    let groupEnergy = Number(input[2]);
    let water = days * playersCount * Number(input[3]);
    let food = days * playersCount * Number(input[4]);
    let energyNeeded = input.slice(5)
    let isOutOfEnergy = false;

    for (let i = 0; i < days; i++) {

        let currentEnergyNeeded = Number(energyNeeded[i]);

        groupEnergy -= currentEnergyNeeded;

        if(groupEnergy > 0){
            if((i + 1) % 2 === 0){
                groupEnergy += groupEnergy * 0.05;
                water -= water * 0.3;
            }
            if((i + 1) % 3 === 0){
                food -= food / playersCount;
                groupEnergy += groupEnergy * 0.1;
            }
        }else{
            isOutOfEnergy = true;
            break;
        } 
    }

    if(isOutOfEnergy){
        console.log(`You will run out of energy. You will be left with ${food.toFixed(2)} food and ${water.toFixed(2)} water.`);
    }else{
        console.log(`You are ready for the quest. You will be left with - ${groupEnergy.toFixed(2)} energy!`);
    }


}


solve(["10",
"7",
"5035.5",
"11.3",
"7.2",
"942.3",
"500.57",
"520.68",
"540.87",
"505.99",
"630.3",
"784.20",
"321.21",
"456.8",
"330"])