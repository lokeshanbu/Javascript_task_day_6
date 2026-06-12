let cart=[{product:"Mobile",price:15000},
    {product:"Headset",price:2000},
    {product:"Charger",price:1000}
];
let total=0;
let expProduct=cart[0];
for(let item of cart){
    console.log(item.product);
    total+=item.price;
    if(item.price>expProduct.price){
        expProduct=item;
    }
}
console.log("Total Cart Value :",total);
console.log("Most Expensive Product :",expProduct.product);