function sendSMS(){
    console.log("SMS Sent To Customer");
}
function placeOrder(callback){
    console.log("Order Placed Successfully");
    callback();
}
placeOrder(sendSMS);