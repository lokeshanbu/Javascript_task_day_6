let inventory=["Rice","Oil","Sugar","Milk","Egg"];
inventory.push("Bread");
inventory.push("Butter");
inventory.shift();
inventory.pop();
if(inventory.includes("Milk")){
    console.log("Milk Exists");
}
else{
    console.log("Milk Not Found");
}
console.log(inventory);