function* offers(){
    yield "10% Cashback";
    yield "20% Cashback";
    yield "Free Delivery";
    yield "Buy 1 Get 1";
}
let offer=offers();

console.log(offer.next().value);
console.log(offer.next().value);
console.log(offer.next().value);
console.log(offer.next().value);