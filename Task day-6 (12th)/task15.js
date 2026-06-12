let product={
    Mobile:15000,
    Laptop:50000,
    Headphone:2000,
    Smartwatch:3000
};
let selectedProd=["Mobile","Headphone","Smartwatch"];
let totalAmount=0;
for(let item of selectedProd){
    console.log(item);
    totalAmount+=product[item];
}
let gst=totalAmount*18/100;
let finalBill=totalAmount+gst;

console.log("Total Amount :",totalAmount);
console.log("GST :",gst);
console.log("Final Bill :",finalBill);