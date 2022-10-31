function footballKit(input){
    let tshirtPrice = Number(input[0]);
    let priceNeeded = Number(input[1]);

    let shortsPrice = tshirtPrice * 0.75;
    let socksPrice = shortsPrice * 0.20;
    let shoesPrice= (tshirtPrice + shortsPrice) * 2;

    let finalPrice =  (tshirtPrice + shortsPrice + socksPrice + shoesPrice) * 0.85;

    if(finalPrice >= priceNeeded){
        console.log("Yes, he will earn the world-cup replica ball!");
        console.log(`His sum is ${finalPrice.toFixed(2)} lv.`);
    }else{
        console.log("No, he will not earn the world-cup replica ball.");
        console.log(`He needs ${(priceNeeded - finalPrice).toFixed(2)} lv. more.`);
    }
}

footballKit(["59.99",
"500"])

