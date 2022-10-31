function christmasPreparation(input){
    let paper = Number(input[0]);
    let cloth = Number(input[1]);
    let glue = Number(input[2]);
    let reduction = Number(input[3]) / 100;

    let price = 0;
    let finalPrice = 0;

    price = ((paper * 5.80) + (cloth * 7.20) + (glue * 1.20));
    finalPrice = price - (price * reduction);

    console.log(finalPrice.toFixed(3));
}

christmasPreparation(["4",
"2",
"5",
"13"])