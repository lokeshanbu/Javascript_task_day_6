let empName="Rahul";
let sal=30000;
let exp=4;
let bonus=0;
if(exp>=5){
    bonus=sal*20/100;
}
else if(exp>=2){
    bonus=sal*10/100;
}
else{
    bonus=sal*5/100;
}
let finalSalary=sal+bonus;
console.log("Employee Name :",empName);
console.log("Final Salary :",finalSalary);