function finalCompetition(input) {
    let dancersCount = Number(input[0]);
    let points = Number(input[1]);
    let season = input[2];
    let location = input[3];

    let winnings = 0;
    let charity = 0;

    if (location === "Bulgaria") {
        winnings = points * dancersCount;
    } else if (location === "Abroad") {
        winnings = (dancersCount * points) * 1.50;
    }

    switch (season) {
        case "summer":
            switch (location) {
                case "Bulgaria":
                    winnings *= 0.95;
                    break;
                case "Abroad":
                    winnings *= 0.90;
                    break;
            }
            break;
        case "winter":
            switch (location) {
                case "Bulgaria":
                    winnings *= 0.92;
                    break;
                case "Abroad":
                    winnings *= 0.85;
                    break;
            }
            break;

    }

    charity = winnings * 0.75;
    winnings *= 0.25;

    let moneyPerDancer = winnings / dancersCount;
    

    console.log(`Charity - ${charity.toFixed(2)}`);
    console.log(`Money per dancer - ${moneyPerDancer.toFixed(2)}`);
}

finalCompetition(["25",
"98",
"winter",
"Bulgaria"])
