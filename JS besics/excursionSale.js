function excursionSale(input){
    let seaCount = input[0];
    let mountainCount = input[1];
    let package = input[2];
    let index = 2;
    let profit = 0;
    let isSold = false;

    while(package !== "Stop"){
        if(seaCount === 0 && mountainCount === 0){
            isSold = true;
            break;
        }else if(package === "sea"){
            if(seaCount > 0){
                profit += 680;
                seaCount--;
            }
        }else if(package === "mountain"){
            if(mountainCount > 0){
                profit += 499;
                mountainCount--;
            }
        }
        index++
        package = input[index];
    }

    if(isSold){
        console.log("Good job! Everything is sold.");
    }
    console.log(`Profit: ${profit} leva.`);
    
}


excursionSale(["6",
"3",
"sea",
"mountain",
"mountain",
"mountain",
"sea",
"Stop"])

