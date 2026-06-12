let patient={
    patientName:"Rahul",
    age:45,
    disease:"Fever",
    doctor:"Dr.Kumar"
};
for(let key in patient){
    console.log(key+" : "+patient[key]);
}
let {patientName,age,disease,doctor}=patient;
console.log(patientName);
console.log(age);
console.log(disease);
console.log(doctor);