function multiplyTable(input){
    let num = Number(input[0]);

    let num1 = num % 10;
    let num2 = num.toString()[1];
    Number(num2);
    let num3 = num.toString()[0];
    Number(num3);

    for(let i = 1; i <= num1; i++){
        for(let j = 1; j <= num2; j++){
            for(let k = 1; k <= num3; k++){
                console.log(`${i} * ${j} * ${k} = ${i * j * k};`);
            }
        }
    }
}

multiplyTable(["222"])