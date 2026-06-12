let bln=10000;
function deposit(amount){
    bln+=amount;
}
function withdraw(amount){
    if(amount<=bln){
        bln-=amount;
    }
    else{
        console.log("Insufficient Balance");
    }
}
function checkBalance(){
    console.log("Balance :",bln);
}
deposit(5000);
withdraw(2000);
checkBalance();