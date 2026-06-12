let employees=[
    {id:1,name:"Rahul",sal:25000},
    {id:2,name:"Kavin",sal:30000},
    {id:3,name:"John",sal:40000}
];
let totalSal=0;
let highestSal=employees[0];

for(let emp of employees){
    console.log(emp.name);

    totalSal+=emp.sal;

    if(emp.sal>highestSal.sal){
        highestSal=emp;
    }
}
console.log("Total Salary Expense :",totalSal);
console.log("Highest Salary Employee :",highestSal.name);