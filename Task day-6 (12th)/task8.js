let amount=6000;
let discount=0;
if(amount>5000){
    discount=amount*20/100;
}
else if(amount>3000){
    discount=amount*10/100;
}
else if(amount>1000){
    discount=amount*5/100;
}
let finalAmount=amount-discount;
console.log("Original Amount :",amount);
console.log("Discount :",discount);
console.log("Final Amount :",finalAmount);